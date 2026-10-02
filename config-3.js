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
//
// Admin dashboard (Firebase Authentication):
//   1. Firebase console → Authentication → Sign-in method → enable Email/Password.
//   2. Authentication → Users → add the admin account.
//   3. Firestore → Rules → publish:
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{db}/documents {
//            function isAdmin() {
//              return request.auth != null
//                && request.auth.token.email == 'YOUR_ADMIN_EMAIL';
//            }
//            match /responses/{id} {
//              allow create: if true;
//              allow read, update, delete: if isAdmin();
//            }
//            match /responses_backup/{id} {
//              allow read, write: if isAdmin();
//            }
//          }
//        }
//   4. Authentication → Settings → Authorized domains: add your GitHub Pages domain.
//   The isAdmin() email check matters: Firebase web API keys are public, so
//   anyone could otherwise create their own account and pass a bare
//   `request.auth != null` check.
// ---------------------------------------------------------------------------

window.APP_CONFIG = {
  // Get one free at https://aistudio.google.com → left nav → "Get API key"
  geminiApiKey: 'AQ.Ab8RN6JXzM3HWsEk7--lrmHm69K0dMDNwHgtjj9e-nT2Ys7GZQ',
  geminiModel: 'gemini-3.8-flash',

  firebase: {
    apiKey: "AIzaSyAE6qiggxn3lnUFYPOCY2sSl4mbyHswvRA",
    authDomain: "student-survey-db.firebaseapp.com",
    projectId: "student-survey-db",
    storageBucket: "student-survey-db.firebasestorage.app",
    messagingSenderId: "661164339094",
    appId: "1:661164339094:web:a797cf05581ba6af2837b7"
  }
};
