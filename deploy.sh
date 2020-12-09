#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.email "983673564@qq.com"
git config user.name "LeanWang0428"
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@blog.github.com:LeanWang0428/blog.git master:gh-pages

cd -