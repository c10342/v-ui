# 目录结构

```
- components
  - button
    - src
      - //...
    - index.ts
  - tag
    - src
      - //...
    - index.ts
  - index.ts
- hooks
  - src
    - //...
  - index.ts
- locale
  - src
    - //...
  - index.ts
- theme-chalk
  - src
    - //...
  - index.scss
- types
  - src
    - //...
  - index.ts
- utils
  - src
    - //...
  - index.ts
- index.ts
```

# 约定说明

- 每个文件夹必须有一个`index.ts`(`theme-chalk`文件夹是`index.scss`)文件，作为入口文件

- 每个文件夹必须有个`src`文件夹，所有代码文件都要放在`src`文件夹下

为什么？

- 方便使用别名路径

- 方便打包后进行路径处理

# components

组件代码，每个组件的文件夹也必须遵守[约定说明](#约定说明)

# hooks

hooks代码

# locale

多语言，国际化文件

# theme-chalk

样式文件

# types

类型文件

# utils

工具函数

# index.ts

组件库入口文件

# 路径别名

**@components/\*** 表示引用`packages\components`下的组件。如：

引用`Button`组件

```javascript
import Button from "@components/button";
```

**@packages/\*** 表示引用`packages`目录下的文件夹。如：

使用`withInstall`函数

```javascript
import { withInstall } from "@packages/utils";
```
