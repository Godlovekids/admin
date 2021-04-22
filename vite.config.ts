import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  // 基础路径
  base: '/',
  // 静态资源路径
  publicDir: 'public',
  // 插件
  plugins: [vue()],
  resolve: {
    // 别名
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      { find: '@layout', replacement: path.resolve(__dirname, 'src/layout') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@style', replacement: path.resolve(__dirname, 'src/style') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@views', replacement: path.resolve(__dirname, 'src/views') }
    ],
    // 省略的扩展名列表
    extensions: ['.ts', '.mjs', '.js', , '.jsx', '.tsx', '.json']
  },
  server: {
    // 自动打开
    open: true,
    // 端口
    port: 9527,
    // 代理
    proxy: {
      '/api': {
        target: 'https://api.shop.eduwork.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    // 最终构建的浏览器兼容目标
    target: 'modules',
    // 输出路径
    outDir: 'dist',
    // 静态资源大小限制,小于此阈值的导入或引用资源将内联为base64编码
    assetsInlineLimit: 4096,
    // css代码拆分
    cssCodeSplit: true,
    // 构建后是否生成sourcemap文件
    sourcemap: false
  }
});
