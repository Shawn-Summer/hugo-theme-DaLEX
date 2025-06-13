[简体中文](https://github.com/Shawn-Summer/hugo-theme-DaLEX/blob/main/readme_zh.md) | [English](https://github.com/Shawn-Summer/hugo-theme-DaLEX/blob/main/readme.md)
# Hugo Theme DaLEX

[![Build](https://github.com/Shawn-Summer/hugo-theme-DaLEX/actions/workflows/run.yaml/badge.svg)](https://github.com/Shawn-Summer/hugo-theme-DaLEX/actions/workflows/gh-pages.yml)
[![License](https://img.shields.io/github/license/Shawn-Summer/hugo-theme-DaLEX)](https://github.com/Shawn-Summer/hugo-theme-DaLEX/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/Shawn-Summer/hugo-theme-DaLEX?style=social)](https://github.com/Shawn-Summer/hugo-theme-DaLEX/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/Shawn-Summer/hugo-theme-DaLEX)](https://github.com/Shawn-Summer/hugo-theme-DaLEX/commits/main)
![Hugo Version](https://img.shields.io/badge/Hugo-%3E=0.120-blue)



<p align="center">
  <a href="https://github.com/Shawn-Summer/hugo-theme-DaLEX">
    <img src="images/dalex.jpg" width="100" />
  </a>
</p>

**D**ark **a**nd **L**ight **EX**treme (DaLEX) is a minimalist theme designed for [Hugo](https://gohugo.io/), emphasizing clear typography and an extremely simple style. It supports light/dark mode, KaTeX mathematical formulas, local search, table of contents navigation, and multilingual switching. Example website: [demo](https://shawn-summer.github.io/hugo-theme-DaLEX/).

![XMinimal Screenshot](images/combined.jpg)

## ✨ Features

- 🌓 Switch between dark and light modes
- 📝 Clear and readable typography
- 📚 Table of Contents
- 🔍 Local search support
- 🌐 Multilingual switching
- 📐 KaTeX mathematical formula rendering
- ⚡ Fast loading and streamlined code
- 🎨 Easy to customize

## 🚀 Quick Start

Create a blog with the theme of DaLEX from scratch:

```bash
hugo new site mysite
cd mysite
rm -rf hugo.toml
git init
git submodule add https://github.com/Shawn-Summer/hugo-theme-DaLEX.git themes/DaLEX
cp -a  themes/DaLEX/exampleSite/. content/
mv content/hugo.yaml .
hugo server
```

## 🚂 Theme Switching

```yaml
params:
  mode: "auto"  # theme mode: light, dark, or auto
```

- Dark mode:

![dark mode1](images/B.png)
![dark mode2](images/E.png)

- Light mode:

![light mode1](images/A.png)
![light mode2](images/F.png)

When `mode: "auto"`, the theme will automatically adjust according to the browser's theme.

## 📦 KaTeX Formula Rendering

Enable KaTeX:

```yaml
params:
  enableKatex = true
```

## 🔎 Table of Contents and Search

```yaml
params:
  toc: true # whether to add table of contents
  fastsearch: true # whether to enable search bar
```

![](images/C.png)
![](images/D.png)

## 📜 License

Licensed under the MIT License, feel free to use and modify.