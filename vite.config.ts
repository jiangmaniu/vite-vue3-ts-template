import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'

import { resolve } from 'path'

import { wrapperEnv } from './build/utils'
import { createProxy } from './build/vite/proxy'
import { OUTPUT_DIR } from './build/constant'
import { configVitePlugins } from './build/vite/plugins/index'


function pathResolve (dir: string) {
  return resolve(process.cwd(), '.', dir)
}


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // loadEnv 读取的布尔类型都为字符串，需要通过该方法转为相应类型
  const viteEnv = wrapperEnv(env)

  const { VITE_PROT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONFIG } = viteEnv

  return {
    root,
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        // /@/xxx => src/xxx
        { find: /\/@\//, replacement: pathResolve('src') + '/' },
        // /$/xxx => src/xxx
        { find: /\/$\//, replacement: pathResolve('build') + '/' },
      ]
    },
    server: {
      port: VITE_PROT,
      // 从 .env.development 加载代理配置
      proxy: createProxy(VITE_PROXY)
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONFIG
        }
      },
      // 关闭 brotliSize 的显示可减少打包时间
      brotliSize: false,
      chunkSizeWarningLimit: 1500
    },
    plugins: configVitePlugins(viteEnv, isBuild)
  }
})
