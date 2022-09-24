const fs = require('fs')
const path = require('path');
module.exports = {
    title: 'Study Of Toast',
    description: '存量变增量',
    theme: 'reco',
    base: '/FrontEndLearning/',
    mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    themeConfig: {
        noFoundPageByTencent: false,
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'Toast的前端学习笔记', 
                items: [
                    { text: 'Github', link: 'https://github.com/breadfruit' },
                    { text: '掘金', link: 'https://juejin.cn/user/1574156383563127' },
                    { text: '邮箱', link: '1845252982@qq.com' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "前端基础",
              path: '/handbook/Basic/index',
              sidebarDepth: 1, 
              collapsable: false, // 不折叠
              children: [
                {
                  title: "CSS", sidebarDepth: 2, children: [
                    {
                      title: 'MinAndMax',
                      path: '/handbook/Basic/CSS/MinAndMax'
                    },  {
                      title: 'Percent',
                      path: '/handbook/Basic/CSS/Percent'
                    }
                  ] 
                },
                {
                  title: "JavaScript", sidebarDepth: 2, children: [
                    {
                      title: 'JavaScript',
                      path: '/handbook/Basic/JavaScript/JavaScript'
                    }
                  ]
                },
                {
                  title: "TypeScript", sidebarDepth: 2, children: [
                    {
                      title: 'TypeScript',
                      path: '/handbook/Basic/TypeScript/TypeScript'
                    }
                  ]
                },
              ],
            },
            {
              title: "前端工程化",
              path: '/handbook/Project/index',
              sidebarDepth: 1,   
              collapsable: false, // 不折叠
              children: [
                { title: "框架", sidebarDepth: 2, path: "/handbook/Project/React" },
                { title: "构建工具", sidebarDepth: 2, path: "/handbook/Project/Build" },
                { title: "包管理工具", sidebarDepth: 2,path: "/handbook/Project/Npm" }
              ],
            },
            {
                  title: "MoreAWeek",
                  path: '/moreAWeek',
                  collapsable: false, // 不折叠
                  children: [
                    { title: "第一期", path: "/moreAWeek/week1" },
                    { title: "第二期", path: "/moreAWeek/week2" },
                    { title: "第三期", path: "/moreAWeek/week3" },
                    { title: "第四期", path: "/moreAWeek/week4" },
                    { title: "第五期", path: "/moreAWeek/week5" },
                    { title: "第六期", path: "/moreAWeek/week6" },
                    { title: "第七期", path: "/moreAWeek/week7" },
                    { title: "第八期", path: "/moreAWeek/week8" },
                    { title: "第九期", path: "/moreAWeek/week9" },
                    { title: "第十期", path: "/moreAWeek/week10" },
                    { title: "第十一期", path: "/moreAWeek/week11" },
                    { title: "第十二期", path: "/moreAWeek/week12" },
                    { title: "第十三期", path: "/moreAWeek/week13" },
                    { title: "第十四期", path: "/moreAWeek/week14" },
                    { title: "第十五期", path: "/moreAWeek/week15" },
                    { title: "第十六期", path: "/moreAWeek/week16" },
                    { title: "第十七期", path: "/moreAWeek/week17" },
                    { title: "第十八期", path: "/moreAWeek/week18" }
                  ],
            }
        ],
        subSidebar: 'auto',
        lastUpdated: '上次更新'
    },
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    devServer: {
      https: true,
      key: fs.readFileSync(path.resolve(__dirname, './localhost+1-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, './localhost+1.pem'))
  },
  plugins: [
    // [
    //   '@vuepress/pwa',
    //   {
    //     serviceWorker: true,
    //     updatePopup: {
    //         message: "发现新内容可用",
    //         buttonText: "刷新"
    //     }
    //  }
    // ]
  ]
}