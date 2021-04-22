import type { Plugin } from "vite";
import vue from '@vitejs/plugin-vue'
import { configCompressPlugin } from "./compress";

type Plugins = (Plugin | Plugin[])[]

export function configVitePlugins (viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: Plugins = [
    vue()
  ]

  if (isBuild) {
    vitePlugins.push(configCompressPlugin())
  }

  console.log(viteEnv)

  return vitePlugins
}