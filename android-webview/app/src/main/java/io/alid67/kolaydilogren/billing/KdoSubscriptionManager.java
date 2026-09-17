package io.alid67.kolaydilogren.billing;

import android.app.Activity;
import android.content.Context;
import com.android.billingclient.api.AcknowledgePurchaseParams;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.PendingPurchasesParams;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.android.billingclient.api.QueryPurchasesParams;
import io.alid67.kolaydilogren.prefs.KdoPrefs;
import java.util.Collections;
import java.util.List;

/**
 * Google Play Billing wrapper for the single annual subscription
 * (PRODUCT_ID) that gates the Play build (BuildConfig.PAYWALL_ENABLED).
 *
 * Entitlement = Play currently reports an active purchase of this product.
 * Trial and paid purchases both report PURCHASED, so there is no local
 * trial-countdown logic. Reinstalling or a second device with the same
 * Play account correctly restores access with no server of our own.
 */
public class KdoSubscriptionManager implements PurchasesUpdatedListener {

    /** Must match the subscription product id created in Play Console. */
    public static final String PRODUCT_ID = "kdo_pro_annual";

    public interface PurchaseListener {
        void onResult(boolean entitled, String errorMessage);
    }

    public static final KdoSubscriptionManager INSTANCE = new KdoSubscriptionManager();

    public PurchaseListener purchaseListener;

    private BillingClient client;
    private Context appContext;

    private KdoSubscriptionManager() {}

    private interface ReadyCallback {
        void onReady(BillingClient client);
    }

    private BillingClient clientFor(Context context) {
        appContext = context.getApplicationContext();
        if (client != null) return client;
        client = BillingClient.newBuilder(context.getApplicationContext())
                .setListener(this)
                .enablePendingPurchases(PendingPurchasesParams.newBuilder().build())
                .build();
        return client;
    }

    private void ensureConnected(Context context, ReadyCallback callback) {
        BillingClient bc = clientFor(context);
        if (bc.isReady()) {
            callback.onReady(bc);
            return;
        }
        bc.startConnection(new BillingClientStateListener() {
            @Override
            public void onBillingSetupFinished(BillingResult result) {
                if (result.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                    callback.onReady(bc);
                }
            }

            @Override
            public void onBillingServiceDisconnected() {
                // Next call reconnects lazily via ensureConnected.
            }
        });
    }

    /**
     * Re-checks Play for an active purchase of PRODUCT_ID and updates the
     * cached flag in KdoPrefs. On a connection error, the previously cached
     * value is kept so a brief Play Store hiccup never locks out a subscriber.
     */
    public void refreshEntitlement(Context context, EntitlementCallback callback) {
        KdoPrefs prefs = new KdoPrefs(context);
        ensureConnected(context, bc -> {
            QueryPurchasesParams params = QueryPurchasesParams.newBuilder()
                    .setProductType(BillingClient.ProductType.SUBS)
                    .build();
            bc.queryPurchasesAsync(params, (result, purchases) -> {
                if (result.getResponseCode() != BillingClient.BillingResponseCode.OK) {
                    callback.onResult(prefs.isSubscriptionActive());
                    return;
                }
                boolean active = false;
                for (Purchase p : purchases) {
                    if (p.getProducts().contains(PRODUCT_ID)
                            && p.getPurchaseState() == Purchase.PurchaseState.PURCHASED) {
                        acknowledgeIfNeeded(bc, p);
                        active = true;
                    }
                }
                prefs.setSubscriptionActive(active);
                prefs.setSubscriptionLastVerifiedMillis(System.currentTimeMillis());
                callback.onResult(active);
            });
        });
    }

    public interface EntitlementCallback {
        void onResult(boolean entitled);
    }

    /** Looks up the product's live price/trial details for the paywall UI. */
    public void queryOffer(Context context, OfferCallback callback) {
        ensureConnected(context, bc -> {
            QueryProductDetailsParams.Product product =
                    QueryProductDetailsParams.Product.newBuilder()
                            .setProductId(PRODUCT_ID)
                            .setProductType(BillingClient.ProductType.SUBS)
                            .build();
            QueryProductDetailsParams params = QueryProductDetailsParams.newBuilder()
                    .setProductList(Collections.singletonList(product))
                    .build();
            bc.queryProductDetailsAsync(params, (result, queryResult) -> {
                if (result.getResponseCode() == BillingClient.BillingResponseCode.OK) {
                    List<ProductDetails> list = queryResult.getProductDetailsList();
                    callback.onResult(list.isEmpty() ? null : list.get(0));
                } else {
                    callback.onResult(null);
                }
            });
        });
    }

    public interface OfferCallback {
        void onResult(ProductDetails details);
    }

    /** Launches Play's purchase sheet for the subscription's first offer. */
    public void launchPurchase(Activity activity, ProductDetails productDetails) {
        List<ProductDetails.SubscriptionOfferDetails> offers =
                productDetails.getSubscriptionOfferDetails();
        if (offers == null || offers.isEmpty()) return;
        String offerToken = offers.get(0).getOfferToken();
        BillingFlowParams.ProductDetailsParams productParams =
                BillingFlowParams.ProductDetailsParams.newBuilder()
                        .setProductDetails(productDetails)
                        .setOfferToken(offerToken)
                        .build();
        BillingFlowParams flowParams = BillingFlowParams.newBuilder()
                .setProductDetailsParamsList(Collections.singletonList(productParams))
                .build();
        ensureConnected(activity, bc -> bc.launchBillingFlow(activity, flowParams));
    }

    private void acknowledgeIfNeeded(BillingClient bc, Purchase purchase) {
        if (purchase.isAcknowledged()) return;
        AcknowledgePurchaseParams params = AcknowledgePurchaseParams.newBuilder()
                .setPurchaseToken(purchase.getPurchaseToken())
                .build();
        bc.acknowledgePurchase(params, result -> { /* best-effort */ });
    }

    @Override
    public void onPurchasesUpdated(BillingResult result, List<Purchase> purchases) {
        if (result.getResponseCode() == BillingClient.BillingResponseCode.OK
                && purchases != null) {
            Purchase purchase = null;
            for (Purchase p : purchases) {
                if (p.getProducts().contains(PRODUCT_ID)) {
                    purchase = p;
                    break;
                }
            }
            boolean entitled = purchase != null
                    && purchase.getPurchaseState() == Purchase.PurchaseState.PURCHASED;
            if (entitled) {
                acknowledgeIfNeeded(client, purchase);
            }
            if (appContext != null) {
                KdoPrefs prefs = new KdoPrefs(appContext);
                prefs.setSubscriptionActive(entitled);
                prefs.setSubscriptionLastVerifiedMillis(System.currentTimeMillis());
            }
            if (purchaseListener != null) {
                purchaseListener.onResult(entitled, null);
            }
        } else if (result.getResponseCode() == BillingClient.BillingResponseCode.USER_CANCELED) {
            if (purchaseListener != null) {
                purchaseListener.onResult(false, null);
            }
        } else {
            if (purchaseListener != null) {
                purchaseListener.onResult(false, result.getDebugMessage());
            }
        }
    }
}
