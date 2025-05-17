// ~/types/nuxt.d.ts
import { Database } from "firebase/database";
import { FirebaseApp } from "firebase/app";

declare module "#app" {
  interface NuxtApp {
    $firebaseApp: FirebaseApp;
    $firebaseDb: Database;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $firebaseApp: FirebaseApp;
    $firebaseDb: Database;
  }
}

export {};