---
title: 第十八期 AART打卡计划
author: toast
---

# Algorithm

#### [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

#### [211. 添加与搜索单词 - 数据结构设计](https://leetcode.cn/problems/design-add-and-search-words-data-structure/)

主要是利用字典数+深度搜索。

预备知识：

字典树（前缀树）是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。前缀树可以用 O(|S|) 的时间复杂度完成如下操作，其中 |S|是插入字符串或查询前缀的长度：

向字典树中插入字符串 word；

查询字符串word 是否已经插入到字典树中。

```tsx
class TrieNode {
    children = []
    isEnd = false
    constructor() {
        this.children = new Array(26).fill(0)
        this.isEnd = false
    }

    insert(word) {
        let node = this
        for(let i = 0 ; i < word.length; i++) {
            const ch = word[i];
            const index = ch.charCodeAt() - 'a'.charCodeAt(0);
            if (node.children[index] === 0) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEnd = true
    }
}
```

# Review

[JavaScript APIs You Don’t Know About](https://www.smashingmagazine.com/2022/09/javascript-api-guide/)

介绍了四个少为人知的Web API

### [Page Visibility API](https://www.smashingmagazine.com/2022/09/javascript-api-guide/#page-visibility-api)

#### 是什么

可以监听浏览器的可见状态。这里的hidden是关掉页面或者切换tab

#### 有什么用

1. 当用户关掉页面的时候可以终止不必要的请求
2. 当用户离开页面的时候，暂停视频，照片和动画
3. 发送用户分析，可以知道用户停留在页面多久

#### 怎么用

```javascript
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        video.play();
    } else {
        video.pause();
    }
});
```

### [Web Share API](https://www.smashingmagazine.com/2022/09/javascript-api-guide/#web-share-api)

#### 是什么？

这个API允许您访问操作系统的本机共享机制，这对移动用户特别有用。

#### 有什么用？

使用这个 API，您可以共享文本、链接和文件，而无需创建自己的共享机制或使用第三方机制。

#### 怎么用

>navigator.canShare() 返回值是boolean，true表示可以双方进行共享
>
>navigator.canShare(obj) 参数是对象，对象属性可以是url，text，title， files（文件对象数组）

```javascript
const shareButton = document.querySelector("#share-button");

const shareQuote = async (shareData) => {
    try {
        await navigator.share(shareData);
    } catch (error) {
        console.error(error);
    }
};

shareButton.addEventListener("click", () => {
    let shareData = {
        title: "A Beautiful Quote",
        text: quote.textContent,
        url: location.href,
    };

    shareQuote(shareData);
});
```

### [Broadcast Channel API](https://www.smashingmagazine.com/2022/09/javascript-api-guide/#broadcast-channel-api)

#### 是什么？

在同源的情况下，它允许浏览上下文相互发送和接收基本数据。

#### 有什么用？

1. 用户登录或所有选项卡。
2. 检测资产何时上传，并在所有页面中显示它

#### 怎么用？

Main.js

```javascript
const broadcast = new BroadcastChannel("quote_channel");

//...

const getQuote = async () => {
try {
const response = await fetch("https://api.quotable.io/random");
const {content, author, dateAdded} = await response.json();
const parsedQuote = ` <q>${content}</q> <br> <p>- ${author}</p><br> <p>Added on ${dateAdded}</p>`;
quote.innerHTML = parsedQuote;
broadcast.postMessage(parsedQuote);
} catch (error) {
console.error(error);
}
};
```

/new-origin/main.js

```javascript
const broadcast = new BroadcastChannel("quote_channel");
const quote = document.querySelector("#quote");

broadcast.onmessage = ({data}) => {
    quote.innerHTML = data;
};
```

### [Internationalization API](https://www.smashingmagazine.com/2022/09/javascript-api-guide/#internationalization-api)

#### 是什么？

对于不同国家之间的日期，数字，单位等进行智能转换。

#### 有什么用？

用来解决跨不同语言和地区的格式化问题。

可以用来实现项目语言化。

#### 怎么用？

---

title: 第十八期 AAAR打卡计划
author: toast
---

```javascript
const logDate = (locale) => {
    const newDate = new Date("2022-10-24"); // YY/MM/DD
    const dateTime = new Intl.DateTimeFormat(locale, {timeZone: "UTC"});
    const formatedDate = dateTime.format(newDate);
    console.log(formatedDate);
};

logDate("en-US"); // 10/24/2022
logDate("de-DE"); // 24.10.2022
logDate("zh-TW"); // 2022/10/24
```

我们可以看到转化格式都是根据local进行转换的，我们也可以智能的

使用`navigator.language` 全局属性,自动转化日期格式。

# Tips

[**Favicons v7.0：一个网站 Favicon.ico 图标库**](https://github.com/itgalaxy/favicons)

 用于对于favicon图表在不同的设备中展示的图表像素。并且favicons已经采用ts。
