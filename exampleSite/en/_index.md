
---
title: 'Home'
date: 2023-01-01T08:00:00-07:00
draft: false
---
[简体中文](https://github.com/Shawn-Summer/hugo-theme-DaLEX/blob/main/readme_zh.md) | [English](https://github.com/Shawn-Summer/hugo-theme-DaLEX/blob/main/readme.md)

<p align="center">
  <a href="https://github.com/Shawn-Summer/hugo-theme-DaLEX">
    <img src="https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/dalex.jpg" width="100" />
  </a>
</p>

**D**ark **a**nd **L**ight **EX**treme (DaLEX) is a minimalist theme designed for [Hugo](https://gohugo.io/), emphasizing clear typography and an extremely simple style. It supports light/dark mode, KaTeX mathematical formulas, local search, table of contents navigation, and multilingual switching. Example website: [demo](https://shawn-summer.github.io/hugo-theme-DaLEX/).

![XMinimal Screenshot](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/combined.jpg)

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

![dark mode1](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/B.png)
![dark mode2](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/E.png)

- Light mode:

![light mode1](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/A.png)
![light mode2](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/F.png)

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

![](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/C.png)
![](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/D.png)

## 📜 License

Licensed under the MIT License, feel free to use and modify.