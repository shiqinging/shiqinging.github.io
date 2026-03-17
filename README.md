# 我的博客

基于 [Hexo](https://hexo.io/) 和 [Fluid 主题](https://github.com/fluid-dev/hexo-theme-fluid) 的静态博客。

## 📝 简介

这是一个个人博客项目，用于整理和分享笔记与文档。

**博客地址：** [https://shiqinging.github.io](https://shiqinging.github.io)

## 🚀 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 本地预览

```bash
npm run server
```

然后在浏览器中访问 `http://localhost:4000`

### 构建静态文件

```bash
npm run build
```

生成的文件将输出到 `docs/` 目录。

### 部署

```bash
git add .
git commit -m '提交信息'
git push origin main 

// 等待几分钟即可
```

## 📁 项目结构

```
.
├── source/              # 源文件目录
│   ├── _posts/          # 博客文章
│   ├── _data/           # 主题配置文件
│   └── img/             # 图片资源
├── themes/              # 主题目录
├── scaffolds/           # 文章模板
├── public/              # 生成的静态文件（构建后）
├── _config.fluid.yml    # Fluid 主题配置
└── package.json         # 项目配置
```

## ✏️ 创建新文章

```bash
npx hexo new post "文章标题"
```

文章将创建在 `source/_posts/` 目录下。

## 🎨 主题配置

主题配置文件位于 `source/_data/fluid_config.yml`，可以修改：

- 网站标题和作者信息
- 导航栏菜单
- 首页 Banner 和标语
- 页脚配置

## 📄 许可证

MIT License
