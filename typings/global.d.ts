declare global {
  type Recordable<T = any> = Record<string, T>

  interface ViteEnv {
    VITE_PROT: number;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: [string, string][];
    VITE_DROP_CONFIG: boolean;
  }
}

export {}
