---
title: 第十六期 AAAR打卡计划
author: toast
---
# Algorithm：

#### [92. 反转链表 II](https://leetcode.cn/problems/reverse-linked-list-ii/)

这次用了头插法，主要还是通过画图理清思路。

https://pic.leetcode-cn.com/1615105150-pfWiGq-image.png

#### [435. 无重叠区间](https://leetcode.cn/problems/non-overlapping-intervals/)

利用贪心法，值考虑当下的最优解

1. 先对区间右值进行排序
2. 只要满足 [...j,i],Rj 小于 Ri，其他情况进行删除。

#### [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)

利用快排，因为快排是升序，所以题目中的第K个最大等于(n - k)个元素。

# Review

[**使用 React Router 实现模块化** — 嵌套路由的使用指南。](https://betterprogramming.pub/using-react-router-for-modularization-872b32315a3b?gi=259f2d43ca17)

```react
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<MainLayout />} />
      </Routes>
    </Router>
  );
}
```

