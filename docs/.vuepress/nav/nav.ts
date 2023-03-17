export default [
    { text: '首页', link: '/' },
    {
        text: '编程语言',
        link: '/language/',
        items: [
            { text: 'C++', link: '/language/c++/' },
            { text: 'Java', link: '/language/java/' },
            { text: 'Go', link: '/language/go/' },

        ],
    },
    {
        text: '软件设计',
        link: '/design/',
        items: [
            { text: '面向对象', link: '/design/oo/' },
            { text: '设计模式', link: '/design/GoF/' },
            { text: '领域驱动设计', link: '/design/ddd/' },
        ],
    },
    {
        text: '常用框架',
        link: '/frame/',
        items: [
            { text: 'Spring', link: '/frame/spring/' },
        ],
    },
    { text: '常用工具', link: '/tools/' },
    {
        text: '更多',
        link: '/archives/',
        items: [
            {
                text: '本站',
                items: [
                    { text: '分类', link: '/categories/' },
                    { text: '标签', link: '/tags/' },
                    { text: '归档', link: '/archives/' },
                ]
            },
            {
                text: '我的',
                items: [
                    { text: '关于', link: '/about/' },
                    { text: '收藏', link: '/pages/beb6c0bd8a66cea6/' },
                ]
            }

        ],
    },
]