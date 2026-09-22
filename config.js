// ---------------------------------------------------------------------------
// App configuration — Gemini API key + Firebase project config.
//
// Kept separate from index.html so keys can be swapped per-deployment
// without touching app code, and so this file can be excluded from
// version control (add "config.js" to your .gitignore) instead of
// committing keys straight into a public repo.
//
// IMPORTANT: this does NOT make the keys secret. This is still a static
// site — any browser that loads the page downloads this file too, and
// anyone can read it via dev tools (Network tab) or view-source. To
// actually limit what these keys can do:
//   - Gemini key: Google Cloud Console → Credentials → this key →
//     Application restrictions → HTTP referrers → add your domain.
//   - Firebase: set Firestore Security Rules so writes/reads require
//     whatever auth/validation you want, rather than relying on the
//     apiKey being hidden (Firebase web API keys are meant to be public
//     anyway — the security boundary is the Firestore rules, not this key).
// ---------------------------------------------------------------------------

window.APP_CONFIG = {
  // Get one free at https://aistudio.google.com → left nav → "Get API key"
  geminiApiKey: 'AQ.Ab8RN6KZiMA6eKdAvOGv7m_9wLu05SD8qeuDShnWhyyluhGJoA',
  geminiModel: 'gemini-2.5-flash',

  firebase: {
    apiKey: "AQ.Ab8RN6KZiMA6eKdAvOGv7m_9wLu05SD8qeuDShnWhyyluhGJoA",
    authDomain: "student-survey-db.firebaseapp.com",
    projectId: "student-survey-db",
    storageBucket: "student-survey-db.firebasestorage.app",
    messagingSenderId: "661164339094",
    appId: "1:661164339094:web:a797cf05581ba6af2837b7"
  }
};
