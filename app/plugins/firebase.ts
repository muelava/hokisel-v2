import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";


export default defineNuxtPlugin(async (nuxtApp) => {
  const { public: { firebaseApiKey, firebaseAuthDomain, firebaseDatabaseUrl, firebaseProjectId, firebaseStorageBucket, firebaseMessagingSenderId, firebaseAppId, firebaseMeasurementId } } = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
    databaseURL: firebaseDatabaseUrl,
    projectId: firebaseProjectId,
    storageBucket: firebaseStorageBucket,
    messagingSenderId: firebaseMessagingSenderId,
    appId: firebaseAppId,
    measurementId: "G-D0JZXLS0HH",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  console.log(firebaseConfig.databaseURL);

  // Analytics hanya dijalankan di client
  if (process && (await isSupported())) {
    getAnalytics(app);
  }

  // Inject ke Nuxt secara global
  nuxtApp.provide("firebaseApp", app);
  nuxtApp.provide("firebaseDb", db);

  console.log("✅ Firebase initialized via plugin");
});
