const {
  getChildren,
} = require("./vuepress-sidebar-auto/vuepress-sidebar-auto");
let sidebar = {};
const options = {
  ignoreDir: ["_ignore"],
};
/**
 * */
sidebar = {
  //左侧列表
  "/学习日记/": [
    {
      title: "学习日记",
      collapsable: false, //来让一个组永远都是展开状态
      sidebarDepth: 5,
      children: getChildren("./docs", "学习日记", options),
    },
  ],
  "/前端进阶/": [
    {
      title: "前端进阶",
      collapsable: false, //来让一个组永远都是展开状态
      sidebarDepth: 5,
      children: getChildren("./docs", "前端进阶", options),
    },
  ],
  "/运维/": [
    {
      title: "运维",
      collapsable: false, //来让一个组永远都是展开状态
      sidebarDepth: 5,
      children: getChildren("./docs", "运维", options),
    },
  ],
  "/": [""], //不能放在数组第一个，否则会导致右侧栏无法使用
};
module.exports = sidebar;
