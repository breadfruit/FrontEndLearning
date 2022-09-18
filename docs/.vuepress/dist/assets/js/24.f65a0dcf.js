(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{429:function(t,e,r){"use strict";r.r(e);var a=r(3),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"algorithm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[t._v("#")]),t._v(" Algorithm：")]),t._v(" "),e("h4",{attrs:{id:"_205-同构字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_205-同构字符串"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://leetcode.cn/problems/isomorphic-strings/",target:"_blank",rel:"noopener noreferrer"}},[t._v("205. 同构字符串"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("解题思路：")]),t._v(" "),e("p",[t._v("需要我们判断 s和 t 每个位置上的字符是否都一一对应，即 s 的任意一个字符被 t 中唯一的字符对应，同时 t的任意一个字符被 s 中唯一的字符对应。这也被称为「双射」的关系。")]),t._v(" "),e("p",[t._v("⚠️")]),t._v(" "),e("p",[t._v("因为当前字符串任意一个字符都有唯一的对应字符。也就是说存在s字符串和t字符串相同字母对应不同的字符。因为对于s字符串来说，只要在t字符串有唯一的字符对应就好。所以需要维护两个哈希表。")]),t._v(" "),e("h4",{attrs:{id:"_392-判断子序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_392-判断子序列"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://leetcode.cn/problems/is-subsequence/",target:"_blank",rel:"noopener noreferrer"}},[t._v("392. 判断子序列"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("思路及算法：")]),t._v(" "),e("p",[t._v("利用双指针，s 是否是 t的子序列，因此只要能找到任意一种 s 在 t 中出现的方式，即可认为 s是 t的子序列。")]),t._v(" "),e("p",[t._v("而当我们从前往后匹配，可以发现每次贪心地匹配靠前的字符是最优决策。")]),t._v(" "),e("p",[t._v("这样，我们初始化两个指针 i和 j，分别指向 s 和 t 的初始位置。每次贪心地匹配，匹配成功则 i和 同时右移，匹配 s 的下一个位置，匹配失败则 j 右移，i 不变，尝试用 t 的下一个字符匹配 s。")]),t._v(" "),e("p",[t._v("最终如果 i移动到 s 的末尾，就说明 s 是 t 的子序列。")]),t._v(" "),e("h2",{attrs:{id:"review-10-个-npm-最佳安全实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#review-10-个-npm-最佳安全实践"}},[t._v("#")]),t._v(" Review："),e("a",{attrs:{href:"https://snyk.io/blog/ten-npm-security-best-practices/?utm_campaign=AOM-2022&utm_medium=Paid-Email&utm_source=Cooperpress-Javascript-Weekly&utm_content=ten-npm-security-best-practices",target:"_blank",rel:"noopener noreferrer"}},[t._v("10 个 npm 最佳安全实践"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("其中我比较有印象的是：")]),t._v(" "),e("ol",[e("li",[t._v("Use a local npm proxy")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://verdaccio.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Verdaccio"),e("OutboundLink")],1),t._v(" is a simple lightweight zero-config-required private registry")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("Assess npm project health")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm outdated,\n\nor\n\nyarn  outdated \n")])])]),e("p",[t._v("可以检查当前安装那一些过期了，当前版本，最新版本，packtype type， url")])])]),t._v(" "),e("h3",{attrs:{id:"开发者常见的十个-javascript-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发者常见的十个-javascript-问题"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://www.toptal.com/javascript/10-most-common-javascript-mistakes",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发者常见的十个 JavaScript 问题"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("收获了：")]),t._v(" "),e("p",[t._v("Providing a String as the First Argument to "),e("code",[t._v("setTimeout")]),t._v(" or "),e("code",[t._v("setInterval")]),t._v("，在这个两个函数中使用字符串作为第一参数并不是一种错误，但是会造成性能问题。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('setInterval("logTime()", 1000);\nsetTimeout("logMessage(\'" + msgValue + "\')", 1000);\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);