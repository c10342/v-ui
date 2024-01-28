# Git Hook

前提：必须是一个`git`仓库

提交时(git commit)：

- 检查暂缓区的代码是否符合规范

- 检查提交的信息格式是否符合规范

**good**

```bash
git commit -m "feat(button): 新增按钮组件"
```

**bad**

```bash
git commit -m "update"
```

# 安装依赖

```bash
npm i husky @commitlint/cli @commitlint/config-conventional cz-conventional-changelog lint-staged -D
```

# 初始化

## 初始化 husky(9.x.x)

```bash
npx husky init
```

此时可以在`package.json`文件的`scripts`字段中看见如下内容

```json
  "scripts": {
    "prepare": "husky"
  }
```

## 添加 hook

**pre-commit**

commit 前触发。在项目根目录新建`.husky\pre-commit`，内容如下

```
npm run lint-staged
```

**pre-commit**

commit 信息时触发。在项目根目录新建`.husky\commit-msg`，内容如下

```
npm run commitlint
```

## 添加 script 脚本

在`package.json`文件的`scripts`字段中添加如下内容

```json
  "scripts": {
    "commitlint": "commitlint --config commitlint.config.js -e -V",
    "lint-staged": "lint-staged --config lint-staged.config.js"
  }
```

**commitlint** 检查提交信息是否规范

**lint-staged** 检查暂缓区的代码是否符合规范

## commitlint.config.js

在项目根目录添加`commitlint.config.js`文件，内容如下

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        "ci", // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        "docs", // 文档更新
        "examples", // 开发测试
        "feat", // 新增功能
        "fix", // bug 修复
        "perf", // 性能优化
        "refactor", // 重构代码(既没有新增功能，也没有修复 bug)
        "style", // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
        "test", // 新增测试用例或是更新现有测试
        "revert", // 回滚某个更早之前的提交
        "chore" // 不属于以上类型的其他类型(日常事务)
      ]
    ]
  }
};
```

## lint-staged.config.js

在项目根目录添加`commitlint.config.js`文件，内容如下

```javascript
module.exports = {
  "*.{css,scss}": ["stylelint **/*.{css,scss} --fix"],
  "*.{jsx,js,vue,tsx,ts}": ["prettier --write", "eslint --fix", "eslint"]
};
```

# 生成符合规范的提交信息

通过命令行交互的形式生成符合规范的提交信息。（当然，你也可以使用`git commit -m "xxx"`来提交信息，不通过命令行交互的形式）

## 添加 script 脚本

在`package.json`文件的`scripts`字段中添加如下内容

```json
  "scripts": {
    "commit": "git cz"
  }
```

## 自定义交互信息

在项目根目录下添加`.czrc`文件，内容如下：

```json
{
  "path": "cz-conventional-changelog",
  "types": {
    "feat": {
      "description": "新增功能",
      "title": "feat"
    },
    "fix": {
      "description": "bug 修复",
      "title": "fix"
    },
    "docs": {
      "description": "文档更新",
      "title": "docs"
    },
    "examples": {
      "description": "开发测试",
      "title": "examples"
    },
    "build": {
      "description": "主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交",
      "title": "build"
    },
    "ci": {
      "description": "主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交",
      "title": "ci"
    },
    "perf": {
      "description": "性能优化",
      "title": "perf"
    },
    "refactor": {
      "description": "重构代码(既没有新增功能，也没有修复 bug)",
      "title": "refactor"
    },
    "style": {
      "description": "不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)",
      "title": "style"
    },
    "test": {
      "description": "测试",
      "title": "test"
    },
    "revert": {
      "description": "回滚某个更早之前的提交",
      "title": "revert"
    },
    "chore": {
      "description": "不属于以上类型的其他类型(日常事务)",
      "title": "chore"
    }
  }
}
```

## 使用

```bash
npm run commit
```
