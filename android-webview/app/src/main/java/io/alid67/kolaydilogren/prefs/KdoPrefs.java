package io.alid67.kolaydilogren.prefs;

import android.content.Context;
import android.content.SharedPreferences;

public class KdoPrefs {
    private static final String PREFS = "kdo_prefs";
    private static final String SUBSCRIPTION_ACTIVE = "subscription_active";
    private static final String SUBSCRIPTION_LAST_VERIFIED = "subscription_last_verified_millis";
    private static final String PROMO_UNLOCK_EXPIRES_AT = "promo_unlock_expires_at_millis";

    private final SharedPreferences prefs;

    public KdoPrefs(Context context) {
        prefs = context.getApplicationContext()
                .getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    public boolean isSubscriptionActive() {
        return prefs.getBoolean(SUBSCRIPTION_ACTIVE, false);
    }

    public void setSubscriptionActive(boolean value) {
        prefs.edit().putBoolean(SUBSCRIPTION_ACTIVE, value).apply();
    }

    public long getSubscriptionLastVerifiedMillis() {
        return prefs.getLong(SUBSCRIPTION_LAST_VERIFIED, 0L);
    }

    public void setSubscriptionLastVerifiedMillis(long value) {
        prefs.edit().putLong(SUBSCRIPTION_LAST_VERIFIED, value).apply();
    }

    public long getPromoUnlockExpiresAtMillis() {
        return prefs.getLong(PROMO_UNLOCK_EXPIRES_AT, 0L);
    }

    public void setPromoUnlockExpiresAtMillis(long value) {
        prefs.edit().putLong(PROMO_UNLOCK_EXPIRES_AT, value).apply();
    }
}
