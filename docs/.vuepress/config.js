module.exports = {
  base: '/happy-ui/',
  title: 'Happy UI',
  description: 'Just playing around',

  // 主题配置
  themeConfig: {
    // 导航栏连接
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Richard-zhao93/happy-ui' },
    ],

    // 侧边栏分组
    sidebar: [
      {
        title: '开发指南',   // 必要的
        // path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          '/guide/install',
          '/guide/quick-start',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,
        children: [ 
          '/components/button'
        ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}