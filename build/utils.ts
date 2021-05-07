/**
 * @description: 是否未打包分析模式
 * @return {boolean}
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}

/**
 * @description: 读取所有环境变量配置文件并格式化相应类型
 * @param {Recordable} envConf
 * @return {ViteEnv}
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    const envValue = envConf[envName]

    // 转数字类型
    const NUMBER_TYPE_KEYS = ['VITE_PORT']
    if (NUMBER_TYPE_KEYS.includes(envValue)) {
      ret[envName] = Number(envValue)
      continue
    }

    // JSON转对象类型
    const JSON_TYPE_KEYS = ['VITE_PROXY']
    if (JSON_TYPE_KEYS.includes(envName)) {
      try {
        ret[envName] = JSON.parse(envValue)
      } catch (err) {
        console.log('viteEnv 转对象错误')
      }
      continue
    }

    // 转布尔类型
    ret[envName] = envValue === 'true' ? true : envValue === 'false' ? false : envValue
  }

  return ret
}
