postMessage('worker msg');
onmessage = function (msg) {
    console.log("worker", msg);
    this.postMessage('hello');
    if (msg.data === 'shutdown')
        this.close();
}
// 引入子worker
importScripts('subworker.js');