# Web Worker 在后台线程中运行脚本

- 在 worker 内，不能直接操作 DOM 节点，
- 不能使用 window 对象的默认方法和属性
- window 对象之下的东西，包括 WebSockets，IndexedDB 以及 FireFox OS 专用的 Data Store API 等数据存储机制
- 在主页面与 worker 之间传递的数据是通过拷贝，而不是共享来完成的
