import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spyro Admin",
  description: "一款简单好用的中后台解决方案",
  // 标签页上的 ico
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  locales: {
    root: {
      label: "简体中文",
      lang: "Zh_CN",
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
    },
  },
  themeConfig: {
    // logo 名称
    logo: "logo.svg",

    // 导航栏
    nav: [
      {
        text: "指南",
        items: [
          { text: "简介", link: "/guide/introduce" },
          { text: "快速上手", link: "/guide/" },
          { text: "配置", link: "/guide/configuration" },
        ],
      },
    ],

    // 搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    // 侧边栏
    sidebar: [
      {
        // 分组标题
        text: "指南",
        items: [
          { text: "简介", link: "/guide/introduce" },
          { text: "快速上手", link: "/guide/" },
          { text: "配置", link: "/guide/configuration" },
        ],
      },
    ],

    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    //页脚
    footer: {
      // 自动更新时间
      copyright: `Copyright © 2019-${new Date().getFullYear()} present Evan You`,
    },
  },
});
