---
title: 第二十二期 AART打卡计划
author: toast
---

# Algorithm

#### [75. 颜色分类](https://leetcode.cn/problems/sort-colors/)

其中比较新颖的地方是用两个指针进行遍历，对三个值进行排序。其中需要考虑中间值。

#### [剑指 Offer 51. 数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)

利用在归并排序中左边的值大于右边值进行累计逆序值，其中因为归并排序中在归的过程中数组是排序好(升序)的，所以在计算逆序值的时候可以把自己右边所有的数值也加上去。

# Review

[如何编写 CommonJS 模块，以便它们的导出可以从 ES 模块实现按照名称导入](https://2ality.com/2022/10/commonjs-named-exports.html)

在阅读文章之前复习一下JS模块基础

>commonjs： 使用 `require` 来导入依赖，`exports` 来导出接口。
>
>ESM： `import` 声明依赖，`export` 声明接口。

Node14.13.0以后，Node [添加了对 CJS named export 的支持](https://link.juejin.cn/?target=https%3A%2F%2Fnodejs.org%2Fen%2Fblog%2Frelease%2Fv14.13.0%2F)。其中使用了 [cjs-module-lexer](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fguybedford%2Fcjs-module-lexer) 的语法分析库，对 CJS 模块内容进行静态语法分析，只支持简单的 `exports` 写法，如 `exports.name = ...` 或 `module.exports = require('...')`

Consider the following ESM module:

```js
// main.mjs
import {namedExport} from './lib.cjs'; // (A)
console.log(namedExport); // 'yes'
```

The import in line A works if the CommonJS module looks like this:

```js
// lib.cjs
exports.namedExport = 'yes';
// module.exports.namedExport.
```

需要注意的是：

1. cjs导入不是同步的。
2. cjs不可以export对象

# Tips

[在Nodejs中使用Shell](https://www.npmjs.com/package/shelljs)

shelljs中集成了shell的一些命令

运用场景：
在npm script中可以使用node文件，实现一些比较复杂的工作流。
