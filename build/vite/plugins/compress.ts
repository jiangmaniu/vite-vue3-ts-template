/**
 * 生产环境打包压缩 gzip 或 brotli
 * https://github.com/anncwb/vite-plugin-compression
 */
import type { Plugin } from 'vite'
import { COMPRESS_DELETE_ORIGIN_FILE, COMPRESS_OPTION } from '/$/constant'
import compressPlugin from 'vite-plugin-compression'

export function configCompressPlugin(): Plugin | Plugin[] {
  const plugins: Plugin | Plugin[] = []

  // gzip 压缩
  if (COMPRESS_OPTION.includes('gzip')) {
    plugins.push(
      compressPlugin({
        deleteOriginFile: COMPRESS_DELETE_ORIGIN_FILE,
      })
    )
  }

  // brotli 压缩
  if (COMPRESS_OPTION.includes('brotli')) {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: COMPRESS_DELETE_ORIGIN_FILE,
      })
    )
  }

  return plugins
}
