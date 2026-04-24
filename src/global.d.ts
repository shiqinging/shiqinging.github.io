import '@tarojs/components'
import Taro from '@tarojs/taro'

declare module '@tarojs/components' {
  namespace View {}
}

declare module '*.css' {}
declare module 'taro.scss' {}

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'tt' | 'qq' | 'jd' | 'rn'
  }
}
