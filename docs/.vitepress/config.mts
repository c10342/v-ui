import { defineConfig } from "vitepress";
import path from "path";
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "v-ui",
  description: "组件库使用文档",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/install" },
      { text: "组件", link: "/components/button" }
    ],
    sidebar: {
      "/guide": [
        { text: "基础", items: [{ text: "安装", link: "/guide/install" }] },
        { text: "进阶", items: [{ text: "国际化", link: "/guide/locale" }] }
      ],
      "/components": [
        {
          text: "基础组件",
          items: [{ text: "Button 按钮", link: "/components/button" }]
        },
        { text: "配置组件", items: [] },
        { text: "表单组件", items: [] },
        {
          text: "数据展示",
          items: [{ text: "Tag 标签", link: '/components/tag' }]
        },
        { text: "导航", items: [] },
        { text: "反馈组件", items: [] },
        { text: "其他", items: [] },
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  },
  vite: {
    resolve: {
      // 路径别名
      alias: [
        {
          find: "@packages",
          replacement: path.resolve(__dirname, "../../packages")
        }
      ]
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
});
