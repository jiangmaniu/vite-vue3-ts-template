// https://vitejs.dev/config/#server-proxy
import { ProxyOptions } from "vite"

type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type ProxyTargetList = Record<string, ProxyOptions>

export function createProxy (list: ProxyList = []) {
  const ret: ProxyTargetList = {}

  for (const [ prefix, target ] of list) {
    // https://github.com/http-party/node-http-proxy#options
    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      // 重写
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '')
    }
  }

  return ret
}
