---
title: 第三期 AART打卡计划
author: toast
---

## Algorithm：

#### [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

解题思路：

将二叉树进行深度遍历，注意题目所示，左右子树进行翻转。如果当前遍历到的节点root 的左右两棵子树都已经翻转(利用深度搜素进行自下而上)，那么我们只需要交换两棵子树的位置，即可完成以 root 为根节点的整棵子树的翻转。

```
function invertTree(root: TreeNode | null): TreeNode | null {
        if(!root) return null
        let rootLeft = invertTree(root.left);
        let rootRight = invertTree(root.right);
        root.left =  rootRight;
        root.right = rootLeft;
        return root
};
```

复杂度分析

时间复杂度：O(n)，其中 n 为二叉树的节点个数。

空间复杂度：O(n)，其中 n 为二叉树(递归栈/函数栈)的深度。

#### [229. 多数元素 II](https://leetcode.cn/problems/majority-element-ii/)

解题思路：

利用哈希值将遍历过程中数字出现的次数进行记录，记录超过数组长度为n的且超过 n / 3的数，可以说是不会超过3个，也就是说最多两个。最后返回所有统计次数超过floor⌊3*n*⌋ 的元素。

```
function majorityElement(nums: number[]): number[] {
    let map = new Map<number, number>();
    for(let i =0; i < nums.length; i ++){
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }else{
            map.set(nums[i], 1);
        }
    }
    let res = [];
    let tagetLen = Math.floor(nums.length / 3);
    for(let e of map.entries()) {
        if(e[1] > tagetLen) {
            res.push(e[0])
        }
    }
    return res;
}
```

复杂度分析

时间复杂度：O(n)，其中 nn 为数组的长度。

空间复杂度：O(n)，其中 nn 为数组的长度，使用哈希表需要开辟额外的空间。

## Review：[React Folder Structure in 5 Steps [2022]](https://blog.bitsrc.io/understanding-referential-equality-in-react-a8fb3769be0)

在建立一个大型的react应用，如何去管理的项目文件夹，对于自己平时没有很少做到的事以下几点：

1. 将常用的组件和ui组件分开 ，components / features
2. 将钩子， context 和其他文件分开，hooks ，components / features
3. 对于工具类函数，辅助性的函数归纳于services(utils)

## Tips: [react-holmes](https://devx-os.github.io/react-holmes/)

 Holmes 声称只有一个目标：“使状态管理尽可能简单和快速"。

React 对于组件之间的数据状态管理的方案是将组件数据状态的独立性，如果要将个组件之间的数据进行通信，通过将该数据挂于全局上下文(useContext)进行通信，而react-homeles是利用观察observe，

1. 应用程序状态分散在组件之间，使其在应用程序的每个部分都可以访问。
2. 组件将共享状态的本地副本和修改它的回调。每次更新都会向订阅相同状态的组件发送事件。
3. 快速和简单



