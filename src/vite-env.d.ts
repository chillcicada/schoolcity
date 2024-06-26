/// <reference types="vite/client" />
/// <reference types="vitest" />
/// <reference types="./auto-import.d.ts" />
/// <reference types="./components.d.ts" />
/// <reference types="./router.d.ts" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
