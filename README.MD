# 呆呆的博客

这是一个记录个人博客的项目

博客名称：[苏呆呆的博客](https://blog.addai.cn/)

博客地址：[blog.addai.cn](https://blog.addai.cn/)

百度搜索：[site:blog.addai.cn](https://www.baidu.com/s?wd=site%3Ablog.addai.cn&rsv_spt=1&rsv_iqid=0xa2c86c95000252c1&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=19&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&inputT=8355&rsv_sug4=8576)

demo地址：[GitHub_Demo](https://github.com/su-dd/demo)


## FrontMatter

目录页的front matter
```
pageComponent: # 使用页面组件
  name: Catalogue # 组件名：Catalogue => 目录页组件 ，使用目录页时 必须 设置为Catalogue
  data: # 组件所需数据
    path:  01.学习笔记/01.前端 # 设置为`docs/`下面的某个文件夹相对路径，如‘01.学习笔记/01.前端’ 或 ’01.学习笔记‘ (有序号的要带序号)
    imgUrl: /img/web.png # 目录页内的图片
    description: JavaScript、ES6、Vue框架等前端技术 # 目录描述（可加入a标签）
title:  # 页面标题
date:  # 创建日期
permalink: /note/javascript # 永久链接
sidebar: false # 不显示侧边栏
article: false # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: false # 不显示评论栏
editLink: false # 不显示编辑按钮
```
笔记文档的front matter
```
title:     # 页面标题
date:     # 创建日期
permalink:  # 永久链接
categories:  # 所在目录
  - 
tags:    # 所属标签
  - 
```
完整的front matter
```
title: 标题
date: 2020-02-21 14:40:19
permalink: /pages/a1bc87
titleTag: 原创
categories:
  - 分类1
  - 分类2
tags:
  - 标签1
sidebar: false
article: false
comment: false
editLink: false
author:
 name: 作者
 link: https://xxx.com
sticky: 1  # 置顶，1 最高，数字越大，置顶地位越低下
```

### 添加标记

:::tip 标题
【提示内容】
:::

:::waring 标题
【警告内容】
:::

:::notice 标题
【注意内容】
:::

