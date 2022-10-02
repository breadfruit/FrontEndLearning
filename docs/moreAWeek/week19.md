---
title: 第十九期 AAAR打卡计划
author: toast
---


# Algorithm

#### [238. 除自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/)

利用索引左侧所有数字的乘积和右侧所有数字的乘积（即前缀与后缀）相乘得到答案。

#### [283. 移动零](https://leetcode.cn/problems/move-zeroes/)

利用双指针，左指针指向处理好的最后一个元素，右指针指向未处理的第一个数组。

#### [209. 长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)

利用滑动窗口，保留在每次等于目标值的时候，数组长度的最小值。

这里有三个临界条件需要注意：

1. 当数组总和小于目标值。
2. 记录更新的操作要在移动左指针之前。
3. 考虑可能不止一次移动左指针。

```typescript
function minSubArrayLen(target: number, nums: number[]): number {
     // 滑动区间
    let right = 0;
    let left = 0;
    let res = Infinity;
    let sum = 0;

    while(right < nums.length) {
        sum += nums[right]
        while(sum >= target) {
            sum -= nums[left];
            res = Math.min(res, right - left + 1)
            left++;
        }
        right++;
    }

    return res === Infinity ? 0 : res
};
```

# Reviews

[React: storing state in URL with URLSearchParams](https://blog.johnnyreilly.com/2022/09/20/react-usesearchparamsstate)

通过阅读这篇文章，在使用react-router的应用程序中，使用usestate的数据状态是不长久和不可以进行数据共享。我们可以使用url上的params参数进行数据中的共享。这样做可以减少前端向浏览器。

在项目中的应用场景：

移动端可以保留上一页的滚动位置。
