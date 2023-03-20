const sidebarConfig = require("./sidebarConfig");
module.exports = {
  title: "Jealh's Note",
  description: "Just write something you want to share",
  dest: './dist',
  ga: "",
  base: "/notebook/",
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'Jealh-h/notebook', // github链接配置
    nav: [
      { text: '主页', link: '/学习日记/' },
      { text: '前端进阶', link: '/前端进阶/' }
    ],
    sidebarDepth: 3,
    sidebar: sidebarConfig
  }
}