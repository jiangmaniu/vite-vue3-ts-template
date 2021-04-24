import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

import { configCompressPlugin } from './compress'
import { configImageMinPlugin } from './imageMin'
import { configVisualizerPlugin } from './visualizer'

export type PluginType = Plugin | Plugin[]

export type PluginsType = PluginType[]

export function configVitePlugins(viteEnv: ViteEnv, isBuild: boolean): PluginsType {
  const vitePlugins: PluginsType = [vue()]

  // 打包分析 vite-plugin-visualizer
  vitePlugins.push(configVisualizerPlugin())

  // 生产环境
  if (isBuild) {
    // 代码压缩 vite-plugin-compression
    vitePlugins.push(configCompressPlugin())

    // 图片压缩 vite-plugin-imagemin
    vitePlugins.push(configImageMinPlugin())
  }

  console.log(viteEnv)

  return vitePlugins
}
