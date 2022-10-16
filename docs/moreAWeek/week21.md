---
title: 第二十一期 AATT打卡计划
author: toast
---

# Algorithm

#### [191. 位1的个数](https://leetcode.cn/problems/number-of-1-bits/)

思路：

主要是利用n & (n-1)对于有长度为32的二进制串中1的个数进行统计。

#### [剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

题目： 一个整型数组 `nums` 里除两个数字之外，其他数字都出现了两次。

思路：

除两个数字之外，也就是说题目中有两个不一样的数要找出来。

1. 首先用异或排除相同的，剩两个数，但是这时候我们不知道这两个数是什么
2. 异或中1表示不同，那么我们用&1找出那个数mark。mark是只有一个1其他都为0的二进制串。
3. mark是区分两个数的标志，根据这个标志进行分组异或。

# Tips

[官方 React 包装器 — @billboard.js/react](https://netil.medium.com/billboard-js-3-6-release-official-react-wrapper-new-enhancements-2dbf1ffc4d1c)

这是个图形库， v3.6 版本新增了 **官方 React 包装器** 和一个新的线性渐变条形图选项。其中图形选项支持渐变色，重叠和图形转化

[ts-node,可以在Nodejs环境中运行ts](https://github.com/TypeStrong/ts-node)

JavaScript和TypeScript都是ECMAScript（ECMA-262）的具体实现.所以再ts中是支持es语法的，但是如果要在nodejs环境中运行ts，需要利用工具ts-node可以在nodejs环境中运行ts。无需经过预编译，工具帮你实现，但是ts-node只支持commonjs语法。所以需要在tsconfig.json进行配置。或者利用ts-paths单独指定tsconfig.json.
