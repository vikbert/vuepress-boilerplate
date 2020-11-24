#!/usr/bin/env sh
set -e

npm run docs:build
mkdir -p gh-pages/

cp -rf docs/.vuepress/dist/* gh-pages
cd gh-pages

git init
git add -A

DATE=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: github gh-pages $DATE"

git push -f https://github.com/vikbert/vuepress-boilerplate.git master:gh-pages

cd -
git pull
