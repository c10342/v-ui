# name

包名，发布到[npm](https://www.npmjs.com/)，通过`npm i`进行安装，必填

# version

版本号。版本号分为 3 部分，大中小。必填

例如：

`1.2.30`

**1** 大版本号，有重大修改才会进行升级

**2** 中版本号，新增功能才会进行升级

**30** 小版本号，bug 修复才会进行升级

示例场景：

- 对代码进行了重构，版本号应升级为`2.0.0`

- 添加了一个组件，版本号应升级为`1.3.0`

- 修复了组件的 bug，版本号应升级为`1.2.31`

# description

包的描述，在[npm](https://www.npmjs.com/)进行搜索是查看的关于包的描述

# main

入口文件，必填

# module

`esmodule`入口文件，非必填。如果项目不支持`esmodule`或者没有填写该字段，则降级使用`main`字段

# typings

类型文件，使用`typescript`编写后打包编译出来的类型文件

# publishConfig

发包相关配置，如可以指定发布到私服

```json
"publishConfig": {
    "registry": "http://xx.xx.xx.xx/repository/local-npm/"
}
```

# scripts

脚本命令

# files

指定发包后，上传到[npm](https://www.npmjs.com/)的文件或者目录

不填写默认上传除`node_modules`，`.git`外的所有文件和目录

# keywords

关键词，[npm](https://www.npmjs.com/)搜索关键词

# license

开源协议

# devDependencies

开发依赖。通过`npm i` 安装包时，不会安装该字段下的依赖

# dependencies

运行时依赖。通过`npm i` 安装包时，会安装该字段下的依赖。

**依赖版本冲突**

组件库使用了`lodash 4.x`版本，但是项目上使用了`lodash 5.x`版本，可能会导致部分功能失效或者报错

# peerDependencies

要求使用该包的项目必须要预安装的依赖。比如，我们这个项目是一个`vue`组件库，所以要求使用这个组件库的项目必须要预安装了`vue`

# devDependencies、dependencies、peerDependencies

- 依赖包应该放在那个字段？

比如安装`lodash`，应该是安装在`dependencies`中。

- 代码运行时所需要的依赖

- 减少打包体积

比如安装`typescript`，应该安装在`devDependencies`中

- 只在开发时使用

`vue`应该安装在`devDependencies`和`peerDependencies`

- 开发时需要使用

- 不安装在`dependencies`因为防止版本冲突



