---
title: 第十四期 AART打卡计划
author: toast
---
# Algorithm：

递归三部曲：

1. 返回值
2. 调用单元做了什么
3. 终止条件

#### [24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)


<img :src="$withBase('/images/两两交换.png')" alt="两两交换">

```typescript
function swapPairs(head: ListNode | null): ListNode | null {
   //终止条件
    if(head == null || head.next == null) {
        return head
    }
    // 单个模块的处理
    let next = head.next;
    head.next = swapPairs(next.next)
    next.next = head;
    //返回值
    return next
};
```

#### [143. 重排链表](https://leetcode.cn/problems/reorder-list/)

解题思路： 


<img :src="$withBase('/images/重排链表.png')" alt="重排链表">


```typescript
function reorderList(head: ListNode | null): void {
    if (head == null || head.next == null || head.next.next == null) {
            return;
    }

    let n = 0;
    let cur = head;
    while(cur) {
        n ++;
        cur = cur.next
    }

   reorderListHelper(head, n)
   
};  


function reorderListHelper(head: ListNode, len: number): ListNode {

    if(len == 1) {
       let outTail = head.next;
       head.next = null;
       return outTail
    }

    if(len == 2) {
        let outTail = head.next.next;
        head.next.next = null;
        return outTail
    }

    let tail = reorderListHelper(head.next, len -2)
    let subHead = head.next;
    head.next = tail;
    let outTail = tail.next;
    tail.next = subHead;

    return outTail
}
```



## Review

### [Using Min/Max Width and Height in CSS](https://www.impressivewebs.com/min-max-width-height-css/)

介绍了如何使用min/max-width/height。

块级元素在使用min-width不起作用，可以使用

```css
display: inline-block; 
```

```css
float: left;
```

其实原理就是讲其变成width可以调整的元素。

### *[Web Image 最佳实践](https://github.com/nucliweb/image-element)*

如何适配不同的设备下的图片宽度和图片格式。响应式图片

with meta可以在不同的设备下使用不同的图像。

```css
<picture>
        <source srcset="./with-images/images/icon1.jpeg" media="(min-width: 1200px)">
        <source srcset="./with-images/images/icon2.jpg" media="(min-width: 600px)">
        <!-- The <img> tag is a fallback image (required in the <picture> tag) -->
        <img src="./with-images/images/wa.jpg" height="300" width="200" alt="Awesome image">
</picture>
```

也可以这样写

```css
<img 
  srcset="image-wide.jpg 600w,
          image-ultrawide.jpg 1200w"
  sizes="(min-width: 600px) 600w,
         (min-width: 1200px) 1200w"
  src="image.jpg" height="300" width="200" alt="Awesome image">
```

<video :src="$withBase('/images/meta.mp4')"></video>

Type 可以在不同的设备下使用不同格式的图像。

```css
<picture>
  <source type="image/jxl" srcset="image.jxl">
  <source type="image/avif" srcset="image.avif">
  <source type="image/webp" srcset="image.webp">
  <source type="image/jpeg" srcset="image.jpg">
  <!-- The <img> tag is a fallback image (required in the <picture> tag) -->
  <img src="image.jpg" height="300" width="200" alt="Awesome image">
</picture>
```

