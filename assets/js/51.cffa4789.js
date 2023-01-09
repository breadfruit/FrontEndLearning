(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{468:function(e,t,n){"use strict";n.r(t);var r=n(2),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[e._v("#")]),e._v(" Algorithm：")]),e._v(" "),t("h4",{attrs:{id:"剑指-offer-36-二叉搜索树与双向链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#剑指-offer-36-二叉搜索树与双向链表"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/",target:"_blank",rel:"noopener noreferrer"}},[e._v("剑指 Offer 36. 二叉搜索树与双向链表"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("解题思路：")]),e._v(" "),t("p",[e._v("这道题是二叉树 + 双向链表。")]),e._v(" "),t("p",[e._v("二叉树是中序遍历：左 -> 根 -> 右,遍历树这里用的是深度遍历DFS。")]),e._v(" "),t("p",[e._v("双向链表是每个节点都有一个前驱指针和一点后继指针。")]),e._v(" "),t("p",[e._v("根据模版：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 打印中序遍历\nfunction dfs(root){\n    if not root: return\n    dfs(root.left)  # 左\n    print(root.val) # 根\n    dfs(root.right) # 右\n}\n")])])]),t("p",[e._v("题目要求是“head” 表示指向链表中有最小元素的节点。那么我们可以从遍历左树到叶节点的时间做文章。保留head(左子树最小)，prev则是每一个节点。还有最后一个要求，最小最大节点形成闭环。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * // Definition for a Node.\n * function Node(val,left,right) {\n *    this.val = val;\n *    this.left = left;\n *    this.right = right;\n * };\n */\n/**\n * @param {Node} root\n * @return {Node}\n */\nvar treeToDoublyList = function(root) {\n    if(!root) return\n    let prev = null;\n    let head = null;\n    const dfs = function(root) {\n        if(!root) return;\n        dfs(root.left);\n        //说明是第一个节点\n        if(!head){\n            head = new Node(root.val);\n            prev = head;\n        } else {\n            let newNode = new Node(root.val);\n            prev.right = newNode;\n            newNode.left = prev;\n            prev = newNode;\n        }\n        dfs(root.right);\n        return root;\n    }\n    dfs(root);\n    head.left = prev;\n    prev.right = head;\n    return head;\n};\n")])])]),t("h4",{attrs:{id:"_724-寻找数组的中心下标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_724-寻找数组的中心下标"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://leetcode.cn/problems/find-pivot-index/",target:"_blank",rel:"noopener noreferrer"}},[e._v("724. 寻找数组的中心下标"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("解题思路：")]),e._v(" "),t("p",[e._v("这道题是找到一个中心下标，让左边数的和等于右边数的和。说到和，可以想到前缀和，有点像累加。")]),e._v(" "),t("ol",[t("li",[e._v("遍历数组，得到前缀和数组。这里需要注意⚠️")])]),e._v(" "),t("p",[e._v("如果中心下标位于数组"),t("strong",[e._v("最左端，那么左侧数之和视为 0")]),e._v(" ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。")]),e._v(" "),t("p",[e._v("如果数组有多个中心下标，应该返回 "),t("strong",[e._v("最靠近左边")]),e._v(" 的那一个。如果数组不存在中心下标，返回 -1 。")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("再次遍历数组判断数组和 是否等于下标"),t("strong",[e._v("i")]),e._v("前缀和 + 下标"),t("strong",[e._v("i+1")]),e._v("前缀和")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * @param {number[]} nums\n * @return {number}\n */\nvar pivotIndex = function(nums) {\n    let preSum = [];\n    preSum[0] = 0;\n    for(let i = 0; i < nums.length; i++) {\n        preSum[i+1] = (preSum[i] + nums[i])\n    }\n   // 前缀之差\n   let right= preSum.length - 1;\n   for(let i = 0; i < preSum.length; i++) {\n        if(preSum[right] - preSum[i] ===  preSum[i-1]) {\n            return i - 1;\n        }\n    }\n    return -1;\n};\n\n")])])]),t("h2",{attrs:{id:"review-重构-2700-行-react-组件的故事"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#review-重构-2700-行-react-组件的故事"}},[e._v("#")]),e._v(" Review："),t("a",{attrs:{href:"https://code.pieces.app/blog/how-to-refactor-large-react-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("重构 2700 行 React 组件的故事"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("主要是抽取出样式文件，协助函数。组件中分为")]),e._v(" "),t("ol",[t("li",[e._v("Dumb components → Only act as a container or view.")]),e._v(" "),t("li",[e._v("Intelligent components → Show something based on logic.")])]),e._v(" "),t("h2",{attrs:{id:"tips-在项目中常用的一些运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tips-在项目中常用的一些运算符"}},[e._v("#")]),e._v(" Tips：在项目中常用的一些运算符")]),e._v(" "),t("ol",[t("li",[e._v("在ts中对象扩展属性")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   type Arrayish = { \n   \n       name: string,\n   \n       age: number,\n   \n   \t\t[n: string]: unknown\n   \n   };\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("a",{attrs:{href:"https://blog.logrocket.com/how-to-use-keyof-operator-typescript/",target:"_blank",rel:"noopener noreferrer"}},[e._v("在ts 使用keyof，extends"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("keyof： "),t("em",[t("strong",[e._v("The keyof operator takes an object type and produces a string or numeric literal union of its keys.")])])]),e._v(" "),t("p",[e._v("extends："),t("strong",[e._v("means “is assignable” instead of “inherits”’ K "),t("code",[e._v("extends")]),e._v(" "),t("code",[e._v("keyof")]),e._v(" T means that any value of type K can be assigned to the string literal union types")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("type Staff  = {\n\n   name: string;\n\n   salary: number;\n\n}\n\nconst developer: Staff = {\n\n  name: 'Tobias',\n\n  salary: 100, \n\n};\n\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n\n  return obj[key];\n\n}\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("在ts使用Record")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   type objProps = Record<string, unknown>\n   \n   const t: objProps  = {\n   \n      'a': true,\n   \n      'b': 2\n   \n   }\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);