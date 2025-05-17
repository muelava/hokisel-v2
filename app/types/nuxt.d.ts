// ~/types/nuxt.d.ts
import type { Database } from 'firebase/database'

declare module '#app' {
  interface NuxtApp {
    $rtdb: Database
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $rtdb: Database
  }
}