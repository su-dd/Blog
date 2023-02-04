import { HeadTags } from 'vuepress/config';
export default <HeadTags>[
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],  // 解决 Chrome 网站统计不准确问题
    [
      'meta',
      {
        name: 'keywords',
        content: 'su-dd,苏呆呆,苏呆呆的博客,呆呆的博客,个人技术博客,技术文档,c++基础,c++提高,c11,c++新特性,c++,java,spring,ddd,面向对象,设计模式,汇编,git,springcloud,面试,git,github,markdown,md文档,vdoing,demo',
      },
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: "baidu_union_verify", content: "0c4ba741a75f427faa8dd9c724a81b73"}], // 百度联盟的网站验证 https://union.baidu.com/
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证  https://ziyuan.baidu.com/
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?3d63e1b0aa607833cafb451888226547";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],  // 百度统计配置

    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
]
