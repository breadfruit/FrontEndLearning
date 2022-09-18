#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 拷贝目录和文件
cp -r ../../../.github ./

git config --global user.email "1845252982@qq.com"
git config --global user.name "breadfruit"
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:breadfruit/FrontEndLearning.git gh-pages

cd -