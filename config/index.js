const { defineConfig } = require('@tarojs/cli')
const react = require('@vitejs/plugin-react').default
const { weappTailwindcss } = require('weapp-tailwindcss/vite')

module.exports = defineConfig({
  projectRoot: './',
  projectName: 'self-discipline',
  alias: {
    '@': './src',
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  designWidth: 375,
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
    vitePlugins: [react(), weappTailwindcss()],
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false,
        config: {},
      },
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
