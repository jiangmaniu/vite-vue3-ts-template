/**
 * html 压缩 和 ejs 模板插件
 * https://github.com/anncwb/vite-plugin-html
 */
import { PluginType } from '.'
import html from 'vite-plugin-html'

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean): PluginType {
  const { VITE_GLOB_APP_TITLE } = env

  const plugin: PluginType = html({
    // 压缩
    minify: isBuild,
    // 插入 ejs 数据
    inject: {
      injectData: {
        title: VITE_GLOB_APP_TITLE,
      },
    },
  })

  return plugin
}
