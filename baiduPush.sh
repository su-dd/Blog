#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

node utils/baiduPush.js https://blog.addai.cn

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=blog.addai.cn&token=vvbXYJ2qGDEoBbDa"

rm -rf urls.txt # 删除文件
