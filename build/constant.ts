/**
 * 生产环境中输出的配置文件名称
 */

import { Compress } from './typings'

/**
 * 生产环境中输出的文件目录
 */
export const OUTPUT_DIR: string = 'dist'

/**
 * 是否开启压缩
 * 可选项：gzip | brotli
 */
export const COMPRESS_OPTION: Compress[] = ['gzip', 'brotli']

/**
 * 压缩文件时是否删除原始文件
 * 默认：不删除
 */
export const COMPRESS_DELETE_ORIGIN_FILE = false
