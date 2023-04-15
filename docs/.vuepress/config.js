module.exports = {
    locales: {
        '/': {
          lang: 'zh-CN'
        },
    },
    hero:'/assets/img/home.jpeg',
    title: '前端开发',
    description: '欢迎大家一起参考与学习',
    themeConfig: {
        logo: '/assets/img/logo.jpeg',
        nav: [
			{ text: "联系作者", link: "/guide/concact" }, // link是路径
			// link 可以链接外部地址，界面样式会带有 小箭头 
			{ text: "github", link: "https://github.com/mapNie/Front-end-sharing.git" },
		],
		// 左侧导航
        sidebar: 
            [
              'JavaScrip',
              'Css-3',
              'Vue-2',
              'Vue-3',
              'TypeScript',
              'UniApp',
              'Flutter',
              'MiniProgram',
              'InterView',
              'Module',
              'Git',
            ]
        ,
	},
	lastUpdated: 'Last Updated',  // 最后更新时间
    }