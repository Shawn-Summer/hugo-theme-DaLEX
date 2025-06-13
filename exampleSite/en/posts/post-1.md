---
title: 'markdown syntax testing 1 '
date: 2023-01-01T08:00:00-07:00
draft: false
---

# h1
## h2
### h3
#### h4
##### h5
###### h6

## Text Styles

* *Italic* or *italic*
* **Bold** or **bold**
* ~~Strikethrough~~
* Inline code: `printf("Hello, DaLEX!");`

## Lists

### Ordered List

1. Dark mode support
2. KaTeX math rendering
3. Search, Table of Contents (TOC), and multilingual support

### Unordered List

* Minimal color scheme
* Customizable styles
* Quick deployment

## Code Blocks

### Python Example

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("XMinimal"))
```

### Bash Commands

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

## Text Styles

* *Italic* or *italic*
* **Bold** or **bold**
* ~~Strikethrough~~
* Inline code: `printf("Hello, DaLEX!");`

## Lists

### Ordered List

1. Dark mode support
2. KaTeX math rendering
3. Search, TOC, multilingual support

### Unordered List

* Minimal color scheme
* Customizable styles
* Quick deployment

## Code Blocks

### Python Example

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("XMinimal"))
```

### Bash Commands

```bash
hugo new site mysite
cd mysite
git init
git submodule add https://github.com/your-theme/xminimal themes/xminimal
```

## Math Formula (KaTeX)

Inline formula: Let \$x^2 + y^2 = r^2\$, then:

Block formula:

$$
\int_{-\infty}^{+\infty} e^{-x^2} = \sqrt{\pi}
$$

## Table

| Feature      | Supported | Notes                  |
| ------------ | --------- | ---------------------- |
| Dark Mode    | yes       | Auto or manual toggle  |
| KaTeX        | yes       | Math formula rendering |
| TOC          | yes       | Auto-generated TOC     |
| Multilingual | yes       | i18n supported         |
| Search       | yes       | Powered by fuse.js     |

## Blockquote & Divider

> A beautiful theme needs both soul and structure.
> --- DaLEX

---

## Image Display

![](https://raw.githubusercontent.com/Shawn-Summer/hugo-theme-DaLEX/main/images/dalex.jpg)

## Task List

* [x] Light & dark mode support
* [x] KaTeX math rendering
* [x] TOC and search support
* [x] Multilingual support
* [ ] Comment system (optional integration)
