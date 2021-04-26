/**
 * 生成 pwa 应用
 * https://github.com/antfu/vite-plugin-pwa
 */
import { VitePWA } from 'vite-plugin-pwa'
import { PluginType } from '.'

export function configPwaPlugin(viteEnv: ViteEnv): PluginType {
  const { VITE_USE_PWA, VITE_GLOB_APP_TITLE, VITE_BLOG_APP_SHORT_NAME } = viteEnv
  let plugin: PluginType = []
  console.log(VITE_USE_PWA)
  if (VITE_USE_PWA) {
    plugin = VitePWA({
      manifest: {
        name: VITE_GLOB_APP_TITLE,
        short_name: VITE_BLOG_APP_SHORT_NAME,
        icons: [
          {
            src: './resource/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './resource/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    })
  }
  return plugin
}
