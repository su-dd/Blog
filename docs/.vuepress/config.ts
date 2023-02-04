/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { defineConfig4CustomTheme } from 'vuepress/config'
import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"
export default defineConfig4CustomTheme({
  theme: 'vdoing', // 使用npm包主题
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "苏呆呆的博客",
      description: '一个向往美好生活的笨人。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig,

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head,

  // 插件配置
  plugins,

  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4"], // 支持 h2、h3、h4 标题
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/head.ts',
    '.vuepress/themeConfig.ts',
    '.vuepress/plugins.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
