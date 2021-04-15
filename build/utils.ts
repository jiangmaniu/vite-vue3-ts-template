
/**
 * @description: 读取所有环境变量配置文件并格式化相应类型
 * @param {Recordable} envConf
 * @return {ViteEnv}
 */
export function wrapperEnv (envConf: Recordable): ViteEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let envValue = envConf[envName]

    // 转数字类型
    const NUMBER_TYPE_KEYS = ['VITE_PROT']
    if (NUMBER_TYPE_KEYS.includes(envValue)) {
      envValue = Number(envValue)
      continue
    }

    // JSON转对象类型
    const JSON_TYPE_KEYS = ['VITE_PROXY']
    if (JSON_TYPE_KEYS.includes(envValue)) {
      try {
        envValue = JSON.parse(envValue)
      } catch {}
      continue
    }

    // 转布尔类型
    envValue = envValue === 'true' ? true : envValue === 'false' ? false : envValue
  }

  return ret
}
