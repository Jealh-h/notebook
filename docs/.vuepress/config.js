const sidebarConfig = require("./sidebarConfig");
module.exports = {
  title: "Jealh's Note",
  description: "Just write something you want to share",
  dest: './docs/.vuepress/dist',
  ga: "",
  base: "/notebook/",
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'vuejs/vuepress', // github链接配置
    nav: [
      { text: '主页', link: '/学习日记/' }
    ],
    sidebarDepth: 3,
    sidebar: sidebarConfig
  }
}