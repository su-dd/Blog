---
title: Hexo配合GitHub建个人博客
date: 2019-02-12 22:22:49
tags: 
    - Hexo
    - GitHubPage
categories:
    - Hexo
comments: true
---

# Hexo配合GitHub创建个人博客

## 环境说明
**系统：** Windows10企业版  

## Hexo 安装  
Hexo是基于Node.js开发的，所以需要先安装Node.js。
>Hexo是一个轻量级的Node.js博客框架，由一位台湾的在校大学生开发完成！

### 安装node.js  
博主的系统为Windows10，只需要现在对应的版本安装即可：[Node.js](http://nodejs.cn/download/ "Node.js下载")  
下载后缀名为.msi的安装包，可以直接双击安装。

### 安装Hexo  

安装完Node.js后，可以使用命令安装**Hexo**：
```
npm install -g hexo-cli
```
![安装Hexo](/../../images/Hexo的使用/Hexo配合gitHub建个人博客/安装Hexo.png "安装Hexo")  

卸载**Hexo**：  
```
npm uninstall hexo-cli
```
卸载需要定位到对应文件夹  
![卸载Hexo](/../../images/Hexo的使用/Hexo配合gitHub建个人博客/卸载Hexo.png "卸载Hexo")

## Hexo 配置  
安装完Hexo后，要使用Hexo，则在指定的文件夹中新建文件：
```
hexo init <folder>
cd <folder>
npm install
```
![初始化配置Hexo](/../../images/Hexo的使用/Hexo配合gitHub建个人博客/初始化配置Hexo.png "初始化配置Hexo")  

**新建完成后的文档结构：**  

![新建完成后的文档结构](/../../images/Hexo的使用/Hexo配合gitHub建个人博客/新建完成后的文档结构.png "新建完成后的文档结构")  

### 配置简单本地搜索
#### 1、安装插件
```
npm install hexo-generator-searchdb --save
```
#### 修改站点_config.yml文件
```
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```
#### 修改主题_config.yml文件
```
local_search:
  enable: true
```
## GitHub 配置   
### 

## Next主题配置
