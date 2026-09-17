package io.alid67.kolaydilogren;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.android.billingclient.api.ProductDetails;
import io.alid67.kolaydilogren.billing.KdoPromoCode;
import io.alid67.kolaydilogren.billing.KdoSubscriptionManager;

/**
 * Blocking gate shown whenever the Play build (BuildConfig.PAYWALL_ENABLED)
 * has no active subscription. Only launched from MainActivity.onCreate —
 * never the launcher activity itself, so Back behaves like leaving the app.
 */
public class PaywallActivity extends AppCompatActivity {

    private ProgressBar progress;
    private Button subscribeButton;
    private TextView description;
    private EditText promoInput;
    private ProductDetails offer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_paywall);

        progress = findViewById(R.id.paywall_progress);
        subscribeButton = findViewById(R.id.subscribe_button);
        description = findViewById(R.id.paywall_description);
        promoInput = findViewById(R.id.promo_code_input);
        Button restoreButton = findViewById(R.id.restore_button);
        Button promoRedeemButton = findViewById(R.id.promo_redeem_button);

        if (KdoPromoCode.isActive(this)) {
            goToMain();
            return;
        }

        promoRedeemButton.setOnClickListener(v -> {
            String input = promoInput.getText() != null
                    ? promoInput.getText().toString() : "";
            if (KdoPromoCode.redeem(this, input)) {
                Toast.makeText(this, R.string.paywall_promo_success, Toast.LENGTH_LONG).show();
                goToMain();
            } else {
                Toast.makeText(this, R.string.paywall_promo_invalid, Toast.LENGTH_SHORT).show();
            }
        });

        subscribeButton.setEnabled(false);
        subscribeButton.setOnClickListener(v -> {
            if (offer != null) {
                KdoSubscriptionManager.INSTANCE.launchPurchase(this, offer);
            }
        });

        restoreButton.setOnClickListener(v -> checkEntitlement(true));

        KdoSubscriptionManager.INSTANCE.purchaseListener = (entitled, errorMessage) ->
                runOnUiThread(() -> {
                    if (entitled) {
                        goToMain();
                    } else if (errorMessage != null) {
                        Toast.makeText(this, errorMessage, Toast.LENGTH_LONG).show();
                    }
                });

        checkEntitlement(false);
        loadOffer();
    }

    @Override
    protected void onDestroy() {
        KdoSubscriptionManager.INSTANCE.purchaseListener = null;
        super.onDestroy();
    }

    private void checkEntitlement(boolean announceIfNotEntitled) {
        progress.setVisibility(View.VISIBLE);
        KdoSubscriptionManager.INSTANCE.refreshEntitlement(this, entitled -> runOnUiThread(() -> {
            progress.setVisibility(View.GONE);
            if (entitled) {
                goToMain();
            } else if (announceIfNotEntitled) {
                Toast.makeText(this, R.string.paywall_no_active_subscription, Toast.LENGTH_LONG)
                        .show();
            }
        }));
    }

    private void loadOffer() {
        KdoSubscriptionManager.INSTANCE.queryOffer(this, details -> runOnUiThread(() -> {
            offer = details;
            subscribeButton.setEnabled(details != null);
            if (details != null) {
                String price = null;
                if (details.getSubscriptionOfferDetails() != null
                        && !details.getSubscriptionOfferDetails().isEmpty()) {
                    ProductDetails.PricingPhases phases =
                            details.getSubscriptionOfferDetails().get(0).getPricingPhases();
                    for (ProductDetails.PricingPhase phase : phases.getPricingPhaseList()) {
                        if (phase.getPriceAmountMicros() > 0) {
                            price = phase.getFormattedPrice();
                        }
                    }
                }
                if (price != null) {
                    description.setText(getString(R.string.paywall_description, price));
                } else {
                    description.setText(R.string.paywall_description_fallback);
                }
            }
        }));
    }

    private void goToMain() {
        if (isFinishing()) return;
        startActivity(new Intent(this, MainActivity.class));
        finish();
    }
}
