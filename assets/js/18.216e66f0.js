(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{419:function(t,s,a){t.exports=a.p+"assets/img/week32.80160760.jpg"},463:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[t._v("#")]),t._v(" Algorithm")]),t._v(" "),s("p",[s("img",{attrs:{src:a(419),alt:"An image"}})]),t._v(" "),s("p",[t._v("逆序对采用了分治算法。")]),t._v(" "),s("p",[s("strong",[t._v("分")]),t._v("：通过二分法，讲整个数组的排序问题转化为子数组的排序问题")]),t._v(" "),s("p",[s("strong",[t._v("治")]),t._v("：在子数组进行合并的时候，进行排序和对于逆序对进行计算。")]),t._v(" "),s("h2",{attrs:{id:"tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://github.com/streamich/react-use",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-use：一大堆有用的 Hooks"),s("OutboundLink")],1)]),t._v("\n  一个真正的工具包，涵盖了从跟踪电池状态和地理位置到设置网页图标, 防抖和播放视频")]),t._v(" "),s("h2",{attrs:{id:"review"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[t._v("#")]),t._v(" Review")]),t._v(" "),s("p",[s("strong",[s("strong",[s("a",{attrs:{href:"https://alexsidorenko.com/blog/useeffect-cleanups",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Visual Guide to useEffect - Cleanups"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("讲诉了在React中useEffect是产生了什么样的副作用，产生了什么效果和如何去清除这个副作用。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("useEffect(() =>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n let secondPassed = 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("const id = setInterval(() =>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console."),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secondPassed++"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这个副作用在每次渲染的时候都会添加一个计时器，在切换其他页面的时候，计时器仍在工作。")]),t._v(" "),s("p",[t._v("可以在页面卸载的时候返回一个请求副作用的函数进行清除。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("useEffect(() =>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n let secondPassed = 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("const id = setInterval(() =>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console."),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secondPassed++"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n return "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);