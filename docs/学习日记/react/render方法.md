## 实现对象（虚拟 dom）渲染成 html 元素

```js
const vnode = {
  tagName: "div",
  props: {
    className: "block-layout",
  },
  children: [
    {
      tagName: "li",
      children: "1",
    },
    {
      tagName: "li",
      children: "2",
    },
  ],
};

// 递归实现 - 非中断式
const render = (vdom, container) => {
  const { tagName, props, children } = vdom;
  const el = document.createElement(tagName);
  for (const key in props) {
    el.setAttribute(key, props[key]);
  }
  if (Array.isArray(children)) {
    children.forEach((child) => render(child, el));
  } else {
    el.textContent = children;
  }
  container.appendChild(el);
};
```

> 渲染结果
>
> <div classname="block-layout"><li>1</li><li>2</li></div>
