import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { configCompressPlugin } from './compress'
import { configImageMinPlugin } from './imageMin'
import { configVisualizerPlugin } from './visualizer'
import { configPwaPlugin } from './pwa'
import { configHtmlPlugin } from './html'

export type PluginType = Plugin | Plugin[]

export type PluginsType = PluginType[]

export function configVitePlugins(viteEnv: ViteEnv, isBuild: boolean): PluginsType {
  const vitePlugins: PluginsType = [vue(), vueJsx()]

  // 打包分析 vite-plugin-visualizer
  vitePlugins.push(configVisualizerPlugin())

  // html 压缩和 ejs 模板 vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // 生产环境
  if (isBuild) {
    // 代码压缩 vite-plugin-compression
    vitePlugins.push(configCompressPlugin())

    // 图片压缩 vite-plugin-imagemin
    vitePlugins.push(configImageMinPlugin())

    // PWA 应用 vite-plugin-pwa
    vitePlugins.push(configPwaPlugin(viteEnv))
  }

  return vitePlugins
}
