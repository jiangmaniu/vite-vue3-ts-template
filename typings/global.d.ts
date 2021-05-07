declare global {
  type Recordable<T = any> = Record<string, T>

  interface ViteEnv {
    VITE_PORT: number
    VITE_PUBLIC_PATH: string
    VITE_PROXY: [string, string][]
    VITE_DROP_CONFIG: boolean
    VITE_USE_PWA: boolean
    VITE_GLOB_APP_TITLE: string
    VITE_BLOG_APP_SHORT_NAME: string
  }
}

export {}
