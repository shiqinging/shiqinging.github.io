import { defineConfig } from '@tarojs/cli'
import react from '@vitejs/plugin-react'

export default defineConfig({
  projectRoot: './',
  projectName: 'self-discipline',
  alias: {
    '@': './src',
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'vite',
    vitePlugins: [react()],
  },
  postcss: {
    autoprefixer: {
      enable: true,
    },
    pxtransform: {
      enable: false,
    },
  },
  h5: {
    postcss: {
      autoprefixer: {
        enable: true,
      },
    },
  },
})
