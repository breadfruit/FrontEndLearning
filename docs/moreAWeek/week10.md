---
title: 第十期 AARR打卡计划
author: toast
---
## Algorithm：

#### [205. 同构字符串](https://leetcode.cn/problems/isomorphic-strings/)

解题思路： 

需要我们判断 s和 t 每个位置上的字符是否都一一对应，即 s 的任意一个字符被 t 中唯一的字符对应，同时 t的任意一个字符被 s 中唯一的字符对应。这也被称为「双射」的关系。

⚠️

因为当前字符串任意一个字符都有唯一的对应字符。也就是说存在s字符串和t字符串相同字母对应不同的字符。因为对于s字符串来说，只要在t字符串有唯一的字符对应就好。所以需要维护两个哈希表。

#### [392. 判断子序列](https://leetcode.cn/problems/is-subsequence/)

思路及算法：

利用双指针，s 是否是 t的子序列，因此只要能找到任意一种 s 在 t 中出现的方式，即可认为 s是 t的子序列。

而当我们从前往后匹配，可以发现每次贪心地匹配靠前的字符是最优决策。

这样，我们初始化两个指针 i和 j，分别指向 s 和 t 的初始位置。每次贪心地匹配，匹配成功则 i和 同时右移，匹配 s 的下一个位置，匹配失败则 j 右移，i 不变，尝试用 t 的下一个字符匹配 s。

最终如果 i移动到 s 的末尾，就说明 s 是 t 的子序列。

## Review：[10 个 npm 最佳安全实践](https://snyk.io/blog/ten-npm-security-best-practices/?utm_campaign=AOM-2022&utm_medium=Paid-Email&utm_source=Cooperpress-Javascript-Weekly&utm_content=ten-npm-security-best-practices)

其中我比较有印象的是：

1. Use a local npm proxy

[Verdaccio](https://verdaccio.org/) is a simple lightweight zero-config-required private registry

2. Assess npm project health

   ```
   npm outdated,
   
   or
   
   yarn  outdated 
   ```

   可以检查当前安装那一些过期了，当前版本，最新版本，packtype type， url

### [开发者常见的十个 JavaScript 问题](https://www.toptal.com/javascript/10-most-common-javascript-mistakes)

收获了： 

Providing a String as the First Argument to `setTimeout` or `setInterval`，在这个两个函数中使用字符串作为第一参数并不是一种错误，但是会造成性能问题。

```
setInterval("logTime()", 1000);
setTimeout("logMessage('" + msgValue + "')", 1000);
```

