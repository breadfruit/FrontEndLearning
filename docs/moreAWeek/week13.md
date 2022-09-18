---
title: 第十三期 AART打卡计划
author: toast
---
## Algorithm：

#### [621. 任务调度器](https://leetcode.cn/problems/task-scheduler/)

解题思路：

最优情况：任务总数等于任务时长

其余情况： 同一个任务之间有一个时间为n的冷却期，在冷却期间可以执行其余其他任务数。

1. 找出最大任务数量的个数maxTask，利用桶效应，其余的任务可以插在maxTask的冷却期.

   >(maxTask - 1) * (n + 1)

2. 利用countMaxTask放最后一个桶后面需要执行的任务，那么当有其他任务数量与maxTask相同时，添加在countMaxTask上。

   >(maxTask - 1) * (n + 1) + countMaxTask

这里为什么需要计算countMaxTask？

![image.png](https://pic.leetcode-cn.com/893c01db5923889a865d7a4fe71de22b9519fc5a673473196ab58f26c1073ed2-image.png)

>因为如图，先计算(桶个数 - 1) \* (n + 1)** ，因为最后一个桶不确定是否需要花费时间。有两种情况，一，其余任务刚好放在a的冷却时间，无论是几个不同的任务，如abcf还是abc这样，都是在冷却时间内，换句话说可以依次执行，不用考虑同一任务的冲突问题。二， 其余任务溢出，需要放在最后一个桶子。那么如何计算这个最后一个桶的花费的任务时长呢？只有其他任务数量和桶数量maxTask一样时就需要放在最后一个桶中。



```typescript
var leastInterval = function(tasks, n) {
    let temp = new Array(26).fill(0)
    let countMaxTask = 0;
    let maxTask=0;
    for(let str of tasks) {
        let temp_num = str.charCodeAt() - 65
        temp[temp_num]++;
        maxTask = Math.max(temp[temp_num], maxTask)
    }
    for(let c in temp) {
        if(temp[c] === maxTask) {
            countMaxTask ++;
        }
    }
    return Math.max(tasks.length, (maxTask - 1) * (n +1) + countMaxTask)
    
};
```

#### [110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)

解题思路：

>  平衡二叉树的定义是：二叉树的每个节点的左右子树的高度差的绝对值不超过 11，则二叉树是平衡二叉树

1. 当节点有**左右子树**且左右子树的**高度相同**。

2. 利用自顶向下和前序遍历的方法，递推到叶子节点，再由下往上计算树的高度。

   注意：需要判断第二层以上是否有左右子树，所以需要加`isBalanced(root.left) && isBalanced(root.right)`加以约束。



```
function isBalanced(root: TreeNode | null): boolean {
    if(!root) return true
    return Math.abs(height(root.left)- height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function height(root: TreeNode | null): number{
    if(!root) {
        return 0
    }else{
        return Math.max(height(root.left), height(root.right)) + 1 
    }
}

```

## Review

### [Suspense](https://blog.6nok.org/the-suspense-is-killing-me:-part-2/)

作者在在React18发布之前写的一些研究内容。

1. New Suspense SSR Architecture in React 18。

   >Suspense 使得组件可以“等待”某些操作结束后，再进行渲染。目前，Suspense 仅支持的使用场景是：[通过 `React.lazy` 动态加载组件](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)。它将在未来支持其它使用场景，如数据获取等。

   **Suspense in React 18 works best when combined with the transition API.**

   ```
   const [isPending, startTransition] = useTransition();
   
   function handleClick() {
     startTransition(() => {
       setTab('comments');
     });
   }
   
   <Suspense fallback={<Spinner />}>
     <div style={{ opacity: isPending ? 0.8 : 1 }}>
       {tab === 'photos' ? <Photos /> : <Comments />}
     </div>
   </Suspense>
   ```

   

2. Transition 

   ```
   const [isPending, startTransition] = useTransition();
   ```

   对于已经展示给用户的内容来说，在切换回去时，展示加载指示器可能会让人困惑。有时，在准备新的 UI 时，展示 “旧” 的 UI 可能会更加友好。要做到这一点，你可以使用新的 transition API [`startTransition`](https://zh-hans.reactjs.org/docs/react-api.html#starttransition) 和 [`useTransition`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usetransition) 来将标记更新为 transitions，同时避免意外的兜底方案。

## Tips

### [Grex：可将提供的示例生成为正则表达式](https://pemistahl.github.io/grex-js/)

可以手动输入事例自动转化为正则表达式

