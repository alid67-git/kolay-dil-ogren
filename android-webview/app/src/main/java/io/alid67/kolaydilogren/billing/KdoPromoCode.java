package io.alid67.kolaydilogren.billing;

import android.content.Context;
import io.alid67.kolaydilogren.prefs.KdoPrefs;
import java.util.concurrent.TimeUnit;

/**
 * A hardcoded redeem code that grants a local, Play-Billing-independent
 * unlock for 30 days — for reviewers or testers who shouldn't need a real
 * subscription. Hand out sparingly; there is no per-device limit.
 */
public class KdoPromoCode {
    private static final String CODE = "KDODOST";
    private static final long UNLOCK_DURATION_MILLIS = TimeUnit.DAYS.toMillis(30);

    public static boolean redeem(Context context, String input) {
        if (!input.trim().equalsIgnoreCase(CODE)) return false;
        new KdoPrefs(context).setPromoUnlockExpiresAtMillis(
                System.currentTimeMillis() + UNLOCK_DURATION_MILLIS);
        return true;
    }

    public static boolean isActive(Context context) {
        return System.currentTimeMillis() < new KdoPrefs(context).getPromoUnlockExpiresAtMillis();
    }
}
