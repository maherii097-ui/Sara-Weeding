/* ============================================================
   ملف الإعدادات — كل البيانات القابلة للتعديل من هنا فقط
   Config File — edit every piece of dynamic data from this one place
   ============================================================ */

const SITE_CONFIG = {

  /* أسماء العروسين — Groom & Bride names */
  groomName: "Sara",
  brideName: "Eslam",

  /* موعد الزفاف (يُستخدم للعد التنازلي فقط — لا يظهر كوقت في صفحة المكان)
     Wedding date & time — used ONLY to power the countdown timer.
     Format: "YYYY-MM-DDTHH:MM:SS" */
  weddingDateTime: "2026-08-30T19:00:00",

  /* رابط خرائط جوجل لصفحة المكان — Google Maps link for the location button */
  googleMapsUrl: "https://maps.app.goo.gl/ap8eadGPnDKnfpuU9",

  /* رابط ملف الموسيقى — Background music file path */
  musicUrl: "assets/ta.mp3",

  /* نص الدعوة (مرجعي/لذوي الإعاقة البصرية فقط — النص الأساسي مرسوم داخل الصورة)
     Invitation copy — kept here for editability & accessibility (screen readers).
     The visible text already lives inside the invitation image itself. */
  invitationText: {
    en: [
      "AS MUSIC FILLS THE AIR",
      "AND OUR HEARTS BECOME ONE.",
      "WE INVITE YOU TO",
      "CELEBRATE THE BEGINNING OF",
      "OUR GREATEST ADVENTURE"
    ],
    ar: " انت هديه ربنا لياانت حبيبي واغلي الناس "
  },
  /* إعدادات Firebase — تُستخدم لتخزين مباركات الأحبة ومشاركتها بين كل الزوار
     Firebase config — powers the shared (public) comments/blessings wall */
  firebaseConfig: {
    apiKey: "AIzaSyBSzRGElnVpgCmKCLgy6jedv1TIoaS3LVQ",
    authDomain: "sara-widding.firebaseapp.com",
    databaseURL: "https://sara-widding-default-rtdb.firebaseio.com",
    projectId: "sara-widding",
    storageBucket: "sara-widding.firebasestorage.app",
    messagingSenderId: "593694700610",
    appId: "1:593694700610:web:8865713d99f7be75e9e9db",
    measurementId: "G-2WRRNTTRL5"
  }
};

/* تهيئة Firebase — تشغّل تلقائيًا عند تحميل الصفحة (Cloud Firestore لتخزين المباركات) */
if (typeof firebase !== "undefined") {
  firebase.initializeApp(SITE_CONFIG.firebaseConfig);
  SITE_CONFIG.db = firebase.firestore();
}
