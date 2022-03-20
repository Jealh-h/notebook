// 'use strict'
// function say() {
//     console.log(this);
//     console.log(this.greet);
// }
// var greet = "window";

const { EventEmitter } = require("stream");

// var Hue = {
//     greet: "Hue",
// };
// say.call(Hue); // Hue
// say.apply(Hue); // Hue
// say.bind(Hue)(); // Hue
// // say.call(null); // 严格模式下报错，非严格模式应用默认绑定

// function restParam(...param) {
//     console.log(param);
// }
// function rP_2(param) {
//     let [arg, ...res] = arguments;
//     console.log(param);
//     console.log(arg, res, '->', ...[], '<-');
// }
// var obj = { name: 'name' }
// restParam(1, 2, 3); // [1,2,3]
// restParam([1, 2, 3]) // [[1,2,3]]
// console.log(...[1, 2, 3]); // 1 2 3
// console.log({ ...obj }); // {name:"name"}
// rP_2(...[1]) // 1
// // console.log(...undefined);

// function currying(fn) {
//     let args = [];
//     let add = function () {
//         args = args.concat(...arguments);
//         console.log(args);
//         if (args.length === fn.length) {
//             return fn(...args);
//         } else {
//             return add;
//         }
//     };
//     return add;
// }

// function add(a, b, c) {
//     return a + b + c;
// }
// let curradd = currying(add);
// console.log(curradd(2)(3, 3));

// var a = "hello";

// if (true) {
//     // a = "world"; // ReferenceError
//     let a = "wowo";
// }

// var p = Promise.all(["string"]);
// console.log(p);
// let arr = [1, [[1, 2]], 3, [4]];
// let res = arr.flat();
// console.log(res);

// function flatArray(arr = [], depth) {
//     let res = [];
//     (function flat(array, d) {
//         array.forEach(element => {
//             if (Array.isArray(element)) {
//                 if (d > 0)
//                     flat(element, d - 1);
//                 else
//                     res.push(element);
//             } else {
//                 res.push(element);
//             }
//         });
//     })(arr, depth);
//     return res;
// }
// let test = [1, 2, 3, [4, [5]]];
// console.log(flatArray(test, 2))

// setTimeout(() => {
//     console.log('quick timer');
// }, 0)

// new Promise((res, rej) => {
//     console.log('init promise');
//     process.nextTick(res);
// }).then(() => console.log('promise then'));

// process.nextTick(() => {
//     console.log('nexttick');
// })

// setImmediate(() => {
//     console.log('immediate');
// })

// init promsie
// nexttick
// immediate
// promise then
// quick timer

// init promsie
// nexttick
// promise then
// quick timer
// immediate

// function isPalindrom(str) {
//     let revStr = str.split('').reverse().join('');
//     return str === revStr;
// }

// function doublePoin(str) {
//     let start = 0;
//     let end = str.length - 1;
//     while (start < end) {
//         if (str[start] != str[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// }
// let str = '1111111111111111111111111111111111111111111111111'
// console.time('1');
// isPalindrom(str);
// console.timeEnd('1');
// console.time('2');
// doublePoin(str);
// console.timeEnd('2');

// let s = new Set([1, 1, 2, 3]);
// s.forEach((v, v2, v3) => {
//     console.log(v, v2, v3);
// })
// let keys = s.keys();
// console.log(keys.next());
// console.log(s.values().next());

// 保留重复的值
// const set = new Set();
// let arr = [1, 1, 2, 2, 3];
// var res = [];
// arr.forEach((item, index) => {
//     if (set.has(item)) {
//         res.push(item);
//     } else {
//         set.add(item);
//     }
// })
// var dupSet = new Set(res);
// res = arr.filter((v, i) => {
//     return dupSet.has(v);
// })
// console.log(res);

//  排序测试
// let a = [5, 4, 3, 2, 1];
// function insertSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//             let tmp = arr[j - 1];
//             arr[j - 1] = arr[j];
//             arr[j] = tmp;
//         }
//     }
// }
// insertSort(a);
// console.log(a);

// let heap = [1, 5, 4, 2, 9, 7, 8];

// function buuildMinHeap(arr) {
//     let length = arr.length;
//     let currentIndex; //当前处理的下沉节点对应的数组索引
//     for (currentIndex = Math.floor((length - 2) / 2); currentIndex >= 0; currentIndex--) {
//         sink(arr, currentIndex, length);
//     }
// }
// function sink(arr, currentIndex, length) {
//     let minIndex = currentIndex;
//     let leftChildIndex = 2 * currentIndex + 1;
//     let rightChildIndex = 2 * currentIndex + 2;
//     // 左侧
//     if (leftChildIndex < length && arr[leftChildIndex] < arr[minIndex]) {
//         minIndex = leftChildIndex;
//     }
//     // 右侧
//     if (rightChildIndex < length && arr[rightChildIndex] < arr[minIndex]) {
//         minIndex = rightChildIndex;
//     }
//     // 最小节点改变了
//     if (minIndex !== currentIndex) {
//         [arr[minIndex], arr[currentIndex]] = [arr[currentIndex], arr[minIndex]];
//         // 递归下称
//         sink(arr, minIndex, length);
//     }
// }

// function heapSort(arr) {
//     let result = [];
//     buuildMinHeap(arr);
//     for (let i = 0, length = arr.length; i < length; i++) {
//         result.push(arr[0]); // 每次迭代，arr的0位置是最小的，因为进行了堆的下沉
//         // 根节点替换成堆的最后的节点
//         [arr[0], arr[length - result.length]] = [arr[length - result.length], arr[0]];
//         sink(arr, 0, length - result.length);
//     }
//     return result;
// }
// res = heapSort(heap);
// console.log(res);

// const obj = {
//     data: [
//         ['xiaoming', 'male', '18', 'beigjing', '2020-01-02'],
//         ['xiaoming', 'male', '18', 'beigjing', '2020-01-02'],
//     ],
//     columns: [
//         { name: 'name', note: '' },
//         { name: 'gendar', note: '' },
//         { name: 'age', note: '' },
//         { name: 'address', note: '' },
//         { name: 'registerTime', note: '' },
//     ]
// }
// const columns = obj.columns.reduce((pre, next) => {
//     pre.push(next['name']);
//     return pre;
// }, []);
// console.log(columns);
// const data = obj.data;
// const res = data.map((row) => {
//     let obj = {};
//     columns.forEach((item, index) => {
//         obj[item] = row[index];
//     })
//     return obj;
// })
// console.log(res);

// var trap = function (height) {
//     let st = [];
//     let sum = 0, width, waterHeight, peek;
//     for (let i = 0; i < height.length; i++) {
//         // 大于栈顶
//         while (st.length != 0 && height[i] > height[st[st.length - 1]]) {
//             let top = st.pop();
//             if (st.length === 0) {
//                 break;
//             }
//             peek = st[st.length - 1];
//             width = i - peek - 1;
//             waterHeight = Math.min(height[i], height[peek]) - height[top];
//             sum += (width * waterHeight);
//         }
//         st.push(i);
//     }
//     return sum;
// };

// let res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// console.log(res);
// function mergePass(arr = [], temp = new Array(arr.length), N = arr.length, length = 1) { // 将每个元素看作是相邻的数组长度为1。
//     let t; // 迭代深度。
//     for (t = 0; Math.pow(2, t) < N; t++, length *= 2) { // 每次跳过的长度翻倍。
//         const even = t % 2 === 0; // 复用 arr 和 temp 来回赋值。
//         for (let left = 0; left < N; left += 2 * length) { // 左边数组起始位置 left 从0开始。
//             const middle = left + length < N ? left + length : left; // 右边数组起始位置 middle 就是left + 一个数组长度length 但是不要超过 N 。
//             const right = left + (2 * length) < N ? left + (2 * length) : N; // 右边界 right 就是 left + 两个数组长度。
//             merge(even ? arr : temp, even ? temp : arr, left, middle, right); // 合并每两个相邻的数组。
//         }
//     }
//     if (t % 2 === 0) {
//         return arr;//返回arr
//     }
//     return temp; // 返回 temp 。
// }
// function merge(arr, temp, left, middle, right) {
//     const leftEnd = middle - 1; // 通过右边数组的起始位置得到左边数组的结束位置。
//     while (left <= leftEnd && middle < right) { // 如果‘指针’没有越界。
//         if (arr[left] > arr[middle]) { // 如果左边数组第一个元素比右边数组第一个元素大。
//             temp[left + middle - leftEnd - 1] = arr[middle++]; // 将右边数组最小的放入有序数组 temp（初始值为空)。
//         } else {
//             temp[left + middle - leftEnd - 1] = arr[left++]; // 将左边数组最小的放入有序数组 temp（初始值为空)。
//         }
//     }
//     while (left > leftEnd && middle < right) { // 如果左边数组放完了，右边数组还有元素。
//         temp[left + middle - leftEnd - 1] = arr[middle++]; // 那么依次将右边数组剩余的元素放入 temp 。
//     }
//     while (left <= leftEnd && middle >= right) { // 如果右边数组放完了，左边数组还有元素
//         temp[left + middle - leftEnd - 1] = arr[left++]; // 那么依次将左边数组剩余的元素放入 temp 。
//     }
// }
// console.log('当前平台版本：', process.platform);
// function findMedianSortedArrays(nums1, nums2) {
//     let length1 = nums1.length, length2 = nums2.length;
//     let totalLength = length1 + length2;
//     if (totalLength % 2 === 1) { // 奇数长度，取中间一个数
//         var midIndex = Math.floor(totalLength / 2);
//         let median = getKthElement(nums1, nums2, midIndex + 1);
//         return median;
//     } else { // 偶数长度，取中间两个数
//         // [1,2,3,4]
//         var midIndex1 = Math.floor(totalLength / 2) - 1, // 1
//             midIndex2 = Math.floor(totalLength / 2); // 2
//         let median = getKthElement(nums1, nums2, midIndex1 + 1) +
//             getKthElement(nums1, nums2, midIndex2 + 1)
//         return median / 2;
//     }
// }
// /**
//  * 取第k大的数
//  * @param {Array} nums1
//  * @param {Array} nums2
//  * @param {Number}} k
//  */
// function getKthElement(nums1, nums2, k) {
//     // 主要思路是找两个数组的第 k/2-1 元素
//     let length1 = nums1.length, length2 = nums2.length;
//     let index1 = 0, index2 = 0;
//     let kthElement = 0;
//     while (true) {
//         console.log(index1, index2, k);
//         if (index1 === length1) {
//             return nums2[index2 + k - 1]; // 减一是为了对应下标
//         }
//         if (index2 === length2) {
//             return nums1[index1 + k - 1];
//         }
//         if (k === 1) {
//             return Math.min(nums1[index1], nums2[index2]);
//         }
//         let half = Math.floor(k / 2);

//         // index+half为每个数组的中点
//         // 相当于取中点
//         let newIndex1 = Math.min(index1 + half, length1) - 1;
//         let newIndex2 = Math.min(index2 + half, length2) - 1;
//         let pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2];
//         // nums1的中点小于nums2的中点，
//         // 将nums1中点的下标加一
//         // 相当于删除较小的数
//         if (pivot1 <= pivot2) {
//             k -= (newIndex1 - index1 + 1); // 加1是为了加一个次序
//             index1 = newIndex1 + 1;
//         } else {
//             k -= (newIndex2 - index2 + 1);
//             index2 = newIndex2 + 1;
//         }
//     }
// }

// let res = findMedianSortedArrays([1, 3], [2]);
// console.log("res:", res);

// 非递归中序遍历

// var inorderTraversal = function (root) {
//     const res = [];
//     const stk = [];
//     while (root || stk.length) {
//         // 一直查找左树
//         while (root) {
//             stk.push(root);
//             root = root.left;
//         }
//         // 中
//         root = stk.pop();
//         res.push(root.val);
//         // 左树遍历完，切换到右树
//         root = root.right;
//     }
//     return res;
// }

// 构建一颗二叉搜索树
// function createBST(n) {
//     return helper(1, n);
// }

// function helper(start, end) {
//     if (start > end) {
//         return null;
//     }
//     let val = (start + end) / 2;
//     let root = new TreeNode(val);
//     root.left = helper(start, val - 1);
//     root.right = helper(val + 1, end);
//     return root;
// }
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         let num = i;
//         console.log(num);
//     }, 0)
// }
// if (3 > 2) {
//     let a = 456;
//     var b = 789
// }
// try {
//     console.log(b);
//     console.log(a);
// } catch (error) {
//     console.log(error);
// }
// console.log('script start');
// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async1();
// async function async2() {
//     console.log('exec async2');
// }
// setTimeout(() => {
//     console.log('timeout');
// }, 0)
// requestAnimationFrame(() => {
//     console.log('RAF');
// })
// console.log('script end1');
// console.log('script end2');
// console.log('script end3');
// console.log('script end4');
// console.log('script end5');
// console.log('script end6');
// console.log('script end7');
// console.log('script end8');
// console.log('script end9');
// console.log('script end10');
// console.log('script end11');
// console.log('script end12');
// console.log('script end13');
// console.log('script end14');
// console.log('script end15');
// console.log('script end16');
// console.log('script end17');
// console.log('script end18');
// console.log('script end19');
// VM186:1 script start
// VM186:3 async1 start
// VM186:9 exec async2
// VM186:17 script end1
// VM186:18 script end2
// VM186:19 script end3
// VM186:20 script end4
// VM186:21 script end5
// VM186:22 script end6
// VM186:23 script end7
// VM186:24 script end8
// VM186:25 script end9
// VM186:26 script end10
// VM186:27 script end11
// VM186:28 script end12
// VM186:29 script end13
// VM186:30 script end14
// VM186:31 script end15
// VM186:32 script end16
// VM186:33 script end17
// VM186:34 script end18
// VM186:35 script end19
// VM186:5 async1 end
// VM186:15 RAF
// VM186:12 timeout


// let promises = [
//     new Promise((res, rej) => {
//         setTimeout(res, 3000, 1);
//     }),
//     new Promise((res, rej) => {
//         setTimeout(rej, 1000, 2);
//     }),
//     new Promise((res, rej) => {
//         setTimeout(res, 4000, 3)
//     }),
//     new Promise((res, rej) => {
//         setTimeout(rej, 0, 4)
//     }),
// ]

// function allSettled(promises) {
//     return new Promise((resolve, reject) => {
//         let result = [];
//         for (let i = 0; i < promises.length; i++) {
//             let promise = promises[i];
//             Promise.resolve(promise).then(data => {
//                 result[i] = data;
//                 if (result.length === promises.length) {
//                     resolve(result);
//                 }
//             }).catch(err => {
//                 result[i] = err + 'err';
//                 if (result.length === promises.length) {
//                     resolve(result);
//                 }
//             })
//         }
//     })
// }

// let res = allSettled(promises);
// console.log(res);

const ee = new EventEmitter();
ee.once('once', function () {
    console.log('once event');
})
ee.emit('once');
ee.emit('once');
console.log(ee.listeners('once'));




