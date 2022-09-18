---
title: 第七期 AARTT打卡计划
author: toast
---

## Algorithm：

#### [875. 爱吃香蕉的珂珂](https://leetcode.cn/problems/koko-eating-bananas/)

珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

#### 解题思路：

需要在一定的时间内找到每小时吃掉最少香蕉的速度v，可以在1-需要吃掉最多香蕉中需找最小值。

#### [91. 解码方法](https://leetcode.cn/problems/decode-ways/)

#### 解题思路：

利用动态规划，dp[i]表示对当前第i位有几种解码方式。

考虑临界点状态：当为”0“时，

单数： 当前不为“0”时，转换方程 dp[i] = dp[i-1]

双数： 当前能与前一位数进行解码，需要考虑前一位是“2”时，注意解码范围：20-26；为“1”时，都可以；为“0”。

## Stop The Screen Going To Sleep With JavaScript

**使用 JavaScript 阻止屏幕进入睡眠状态** — 本篇文章主要解释如何使用屏幕调用锁定屏幕 API=> [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API)

```
wakeLock.release() // 返回一个promise对象
```

接口API

1. 返回一个 [`WakeLock`](https://developer.mozilla.org/en-US/docs/Web/API/WakeLock) 对象实例，从中可以访问所有其他功能。

```
navigator.wakeLock
```

2. [`WakeLockSentinel`](https://developer.mozilla.org/en-US/docs/Web/API/WakeLockSentinel)（navigator.wakeLock.request() || wakelock.request）

3. [`WakeLock`](https://developer.mozilla.org/en-US/docs/Web/API/WakeLock)

## [QuickReader](https://github.com/EtherDream/QuickReader)

适用于浏览器和 Node 的高性能流读取器— 这个想法是通过流(stream)在下载的同时读取指定格式的数据，而不必等待下载完成才能进行读取。

可以用来实现读取文件时，进度条的读取进度显示。