(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{441:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[t._v("#")]),t._v(" Algorithm：")]),t._v(" "),a("h4",{attrs:{id:"_621-任务调度器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_621-任务调度器"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode.cn/problems/task-scheduler/",target:"_blank",rel:"noopener noreferrer"}},[t._v("621. 任务调度器"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("解题思路：")]),t._v(" "),a("p",[t._v("最优情况：任务总数等于任务时长")]),t._v(" "),a("p",[t._v("其余情况： 同一个任务之间有一个时间为n的冷却期，在冷却期间可以执行其余其他任务数。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("找出最大任务数量的个数maxTask，利用桶效应，其余的任务可以插在maxTask的冷却期.")]),t._v(" "),a("blockquote",[a("p",[t._v("(maxTask - 1) * (n + 1)")])])]),t._v(" "),a("li",[a("p",[t._v("利用countMaxTask放最后一个桶后面需要执行的任务，那么当有其他任务数量与maxTask相同时，添加在countMaxTask上。")]),t._v(" "),a("blockquote",[a("p",[t._v("(maxTask - 1) * (n + 1) + countMaxTask")])])])]),t._v(" "),a("p",[t._v("这里为什么需要计算countMaxTask？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/893c01db5923889a865d7a4fe71de22b9519fc5a673473196ab58f26c1073ed2-image.png",alt:"image.png"}})]),t._v(" "),a("blockquote",[a("p",[t._v("因为如图，先计算(桶个数 - 1) * (n + 1)** ，因为最后一个桶不确定是否需要花费时间。有两种情况，一，其余任务刚好放在a的冷却时间，无论是几个不同的任务，如abcf还是abc这样，都是在冷却时间内，换句话说可以依次执行，不用考虑同一任务的冲突问题。二， 其余任务溢出，需要放在最后一个桶子。那么如何计算这个最后一个桶的花费的任务时长呢？只有其他任务数量和桶数量maxTask一样时就需要放在最后一个桶中。")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("leastInterval")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" countMaxTask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" maxTask"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" temp_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),t._v("\n        temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("temp_num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        maxTask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("temp_num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maxTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" maxTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            countMaxTask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxTask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" countMaxTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_110-平衡二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_110-平衡二叉树"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode.cn/problems/balanced-binary-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("110. 平衡二叉树"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("解题思路：")]),t._v(" "),a("blockquote",[a("p",[t._v("平衡二叉树的定义是：二叉树的每个节点的左右子树的高度差的绝对值不超过 11，则二叉树是平衡二叉树")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("当节点有"),a("strong",[t._v("左右子树")]),t._v("且左右子树的"),a("strong",[t._v("高度相同")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("利用自顶向下和前序遍历的方法，递推到叶子节点，再由下往上计算树的高度。")]),t._v(" "),a("p",[t._v("注意：需要判断第二层以上是否有左右子树，所以需要加"),a("code",[t._v("isBalanced(root.left) && isBalanced(root.right)")]),t._v("加以约束。")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function isBalanced(root: TreeNode | null): boolean {\n    if(!root) return true\n    return Math.abs(height(root.left)- height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)\n};\n\nfunction height(root: TreeNode | null): number{\n    if(!root) {\n        return 0\n    }else{\n        return Math.max(height(root.left), height(root.right)) + 1 \n    }\n}\n\n")])])]),a("h2",{attrs:{id:"review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[t._v("#")]),t._v(" Review")]),t._v(" "),a("h3",{attrs:{id:"suspense"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suspense"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://blog.6nok.org/the-suspense-is-killing-me:-part-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Suspense"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("作者在在React18发布之前写的一些研究内容。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("New Suspense SSR Architecture in React 18。")]),t._v(" "),a("blockquote",[a("p",[t._v("Suspense 使得组件可以“等待”某些操作结束后，再进行渲染。目前，Suspense 仅支持的使用场景是："),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过 "),a("code",[t._v("React.lazy")]),t._v(" 动态加载组件"),a("OutboundLink")],1),t._v("。它将在未来支持其它使用场景，如数据获取等。")])]),t._v(" "),a("p",[a("strong",[t._v("Suspense in React 18 works best when combined with the transition API.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const [isPending, startTransition] = useTransition();\n\nfunction handleClick() {\n  startTransition(() => {\n    setTab('comments');\n  });\n}\n\n<Suspense fallback={<Spinner />}>\n  <div style={{ opacity: isPending ? 0.8 : 1 }}>\n    {tab === 'photos' ? <Photos /> : <Comments />}\n  </div>\n</Suspense>\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Transition")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const [isPending, startTransition] = useTransition();\n")])])]),a("p",[t._v("对于已经展示给用户的内容来说，在切换回去时，展示加载指示器可能会让人困惑。有时，在准备新的 UI 时，展示 “旧” 的 UI 可能会更加友好。要做到这一点，你可以使用新的 transition API "),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-api.html#starttransition",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("startTransition")]),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usetransition",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("useTransition")]),a("OutboundLink")],1),t._v(" 来将标记更新为 transitions，同时避免意外的兜底方案。")])])]),t._v(" "),a("h2",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),a("h3",{attrs:{id:"grex-可将提供的示例生成为正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grex-可将提供的示例生成为正则表达式"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://pemistahl.github.io/grex-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grex：可将提供的示例生成为正则表达式"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("可以手动输入事例自动转化为正则表达式")])])}),[],!1,null,null,null);a.default=e.exports}}]);