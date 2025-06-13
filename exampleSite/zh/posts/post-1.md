---
title: 'markdown 语法测试 1 '
date: 2023-01-01T08:00:00-07:00
draft: false
---

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 文本样式

- 斜体 *italic* 或 _italic_
- 加粗 **bold** 或 __bold__
- 删除线 ~~strikethrough~~
- 行内代码：`printf("Hello, DaLEX!");`

## 列表

### 有序列表

1. 支持暗色模式
2. 支持 KaTeX 公式
3. 支持搜索、目录、多语言

### 无序列表

- 简洁的配色
- 可自定义样式
- 快速部署

## 代码块

### Python 示例

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("XMinimal"))
```

### Bash 命令

```bash
hugo new site mysite
cd mysite
git init
git submodule add https://github.com/your-theme/xminimal themes/xminimal
```

## 文本样式

- 斜体 *italic* 或 _italic_
- 加粗 **bold** 或 __bold__
- 删除线 ~~strikethrough~~
- 行内代码：`printf("Hello, DaLEX!");`

## 列表

### 有序列表

1. 支持暗色模式
2. 支持 KaTeX 公式
3. 支持搜索、目录、多语言

### 无序列表

- 简洁的配色
- 可自定义样式
- 快速部署

## 代码块

### Python 示例

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("XMinimal"))
```

### Bash 命令

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

## 数学公式 (KaTeX)

行内公式：令 $x^2 + y^2 = r^2$，则有：

块级公式：

$$
\int _{-\infin}^{+\infin}e^{-x^2}=\sqrt\pi
$$

## 表格

| 功能       | 支持情况 | 备注             |
| ---------- | -------- | ---------------- |
| 暗色模式   | yes       | 自动或手动切换   |
| KaTeX 支持 | yes       | 支持数学公式渲染 |
| 目录       | yes       | 自动生成 TOC     |
| 多语言     | yes       | i18n 支持        |
| 搜索       | yes       | 使用 fuse.js     |

## 引用与分隔线

> 一个美丽的主题，既要有灵魂，也要有骨架。
>
> --- DaLEX

---

## 图片展示

![](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/dalex.jpg)

## 任务列表 

* [X] 暗色与亮色模式
* [X] 数学公式支持（KaTeX）
* [X] 支持目录和搜索
* [X] 多语言支持
* [ ] 评论系统（可选集成）
