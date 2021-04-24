/**
 * 生产环境打包分析
 * https://github.com/btd/rollup-plugin-visualizer
 */

import visualizerPlugin from 'rollup-plugin-visualizer'
import { PluginType } from '.'
import { isReportMode } from '/$/utils'

export function configVisualizerPlugin(): PluginType {
  let plugin: PluginType = []

  if (isReportMode()) {
    plugin = visualizerPlugin({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  }

  return plugin
}
