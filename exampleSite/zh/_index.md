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

**D**ark **a**nd **L**ight **EX**treme (DaLEX) 是一个为 [Hugo](https://gohugo.io/) 打造的极简主义主题，强调清晰的排版和极致的简洁风格。支持亮/暗色模式、KaTeX 数学公式、本地搜索、目录导航以及多语言切换。示例网站：[demo](https://shawn-summer.github.io/)。

![XMinimal 截图](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/combined.jpg)

## ✨ 特性

- 🌓 暗色 / 亮色 模式切换
- 📝 清晰易读的字体排版
- 📚 内容目录（Table of Contents）
- 🔍 支持本地搜索
- 🌐 多语言切换
- 📐 KaTeX 数学公式渲染
- ⚡ 加载快速，代码精简
- 🎨 易于个性化配置

## 🚀 快速开始

从头开始创建一个主题为 DaLEX 的博客:

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

## 🚂 切换主题

```yaml
params:
  mode: "auto"  # theme mode: light , dark or auto
```
- 暗色模式：

![dark mode1](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/B.png)

![dark mode2](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/E.png)

- 浅色模式：

![light mode1](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/A.png)
![light mode2](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/F.png)

当`mode: "auto"`时，会根据浏览器主题自动设置主题。

## 📦 KaTeX 公式渲染

启用 KaTeX：

```yaml
params:
  enableKatex = true
```

## 🔎 目录和搜索

```yaml
params：
  toc: true # add table of content or not
  fastsearch: true # enable search bar or not 
```
![](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/C.png)
![](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/D.png)


## 📜 许可证

使用 MIT 许可证，欢迎自由使用和修改。

