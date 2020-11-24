<div align="center">
  <!-- Logo and title and sub-title -->
  <img src="https://vuepress.vuejs.org/hero.png" alt="logo" width="180"/>
  <h1 style="font-weight: bolder; color: black; margin-top: 0px">Vuepress starter</h1>
  <h3 style="color: darkgrey; margin: 40px 0"> 
    A quick starter for vuepress sites
  </h3>

  <!-- description of project -->
  <p>
    This boilerplate provides the template for a quick start with vuepress. It includes the themming customization and a simple script for the deployment on GitHub Pages.
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

## Download & Install

```bash
 git clone https://github.com/vikbert/vuepress-boilerplate.git my-vuepress
 cd my-vuepress
 npm install
 npm run docs:dev  // Goto http://localhost:8080/vuepress-boilerplate/
```

> the project file structure
```bash
docs/
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
- `docs`: the root location of `markdown` documents
- `other`: the location of the special page contents, which you will show as nav links.
- `.vuepress` is the location for the config files in vuepress. It is also the default output location for `vuepress build`. After each run "vuepress build", it creates a new folder named `dist` within `./vuepress/dist`
- `dist` folder is the output location of command `vuepress run docs`, where all generated HTML files go. It can be configured by the tag `dest` in `config.js`

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
> HTML file will be generated according to the file structure of `markdown` files in the root `docs`

## Deployment
As an example, we deploy the static pages under `github.io/vikbert/vuepress-boilerplate`.

First of all, we need set the correct `base` in `config.js`
```bash
 base: '/vuepress-boilerplate/', 
```

then, run the deploy script to trigger the build and push the generated static pages to GitHub `gh-pages`
```bash
 bash deploy.sh 
```

```bash
## deploy.sh
## ------------------

#!/usr/bin/env sh
set -e

# change the GIT_REPO with the correct URL
readonly GIT_REPO=https://github.com/vikbert/vuepress-boilerplate.git

npm run docs:build
mkdir -p gh-pages/

cp -rf docs/.vuepress/dist/* gh-pages
cd gh-pages

git init
git add -A

DATE=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: github gh-pages $DATE"

git push -f $GIT_REPO master:gh-pages

cd -
git pull
rm -rf gh-pages

```
> based on the current project repository, the `GIT_REPO` should be changed `https://github.com/vikbert/vuepress-boilerplate.git`.




## License

MIT © vikbert
