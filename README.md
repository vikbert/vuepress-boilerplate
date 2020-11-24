<div align="center">
  <!-- Logo and title and sub-title -->
  <img src="https://vuepress.vuejs.org/hero.png" alt="logo" width="180"/>
  <h1 style="font-weight: bolder; color: black; margin-top: 0px">Vuepress starter</h1>
  <h3 style="color: darkgrey; margin: 40px 0"> 
    A quick starter for vuepress sites
  </h3>

  <!-- description of project -->
  <p>
    This boilerplate provides the quick start with vuepress generator. Including customization and deployment on `github.io`.
  </p>

  <!-- github icons for PR and License -->
  <p>
    <a href="#">
      <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
    </a>
  </p>
</div>

---

## Install

```bash
 git clone https://github.com/vikbert/vuepress-boilerplate.git my-vuepress
```

> the project file structure
```bash
.
├── .gitignore
├── .vuepress
│   ├── config.js
│   └── styles
│       └── palette.styl
├── README.md
├── layout.md
└── other
    ├── about.md
    └── latest.md
```
- `docs`: The root of folder `docs` is the location of `markdown`
- `other`: the location of the special page content, which you will show as navigtion links.
- `.vuepress` is the location of vuepress configuration. It is also the default output location for `vuepress build`. After each run "vuepress build", a fold named `dist` will be generated within `./vuepress/dist`
- `dist` folder is the output location of command `vuepress`, where all generated htmls files go. It can be configured by tag `dest` in `config.js`

> generated html static files
```bash
.vuepress
├── config.js
├── dist
│   ├── 404.html
│   ├── assets
│   │   ├── css
│   │   │   └── 0.styles.e9e8401c.css
│   │   ├── img
│   │   │   └── search.83621669.svg
│   │   └── js
│   │       ├── 2.a59b9c3e.js
│   │       ├── ...
│   │       └── app.5bd48d18.js
│   ├── index.html
│   ├── layout.html
│   └── other
│       ├── about.html
│       └── latest.html
```
> html file will be generated according to the file structure of `markdown` files in the root of `docs`

## Deployment
As example, we deploy this static web site under `github.io/vikbert/vuepress-boilerplate`.

Run the deploy script to push the static pages to github `gh-pages`
```bash
 bash deploy.sh 
```

```bash
## deploy.sh
## ------------------

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
rm -rf gh-pages
cd -
git pull
```
> based on the current project repository, the `git repo` should be changed `https://github.com/vikbert/vuepress-boilerplate.git`.




## License

MIT © vikbert
