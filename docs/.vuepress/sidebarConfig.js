const { getChildren } = require("./vuepress-sidebar-auto/vuepress-sidebar-auto");
let sidebar = {};
/**
 * */
sidebar = {//左侧列表
  '/学习日记/': [
    {
      title: '学习日记',
      collapsable: false,//来让一个组永远都是展开状态
      sidebarDepth: 5,
      children: getChildren('./docs', '学习日记')
    }
  ],
  '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
};
module.exports = sidebar;