import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { isSupported, getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

let analyticsInstance = null;
isSupported()
    .then((supported) => {
        if (supported) {
            analyticsInstance = getAnalytics(app);
        }
    })
    .catch(() => {
        analyticsInstance = null;
    });

export const logPageView = (path) => {
    if (!analyticsInstance) return;
    logEvent(analyticsInstance, "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
    });
};