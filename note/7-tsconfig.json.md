# 初始化

生成`tsconfig.json`文件

```bash
 npx tsc --init
```

写入如下内容：

```json
{
  "compilerOptions": {
    "module": "ESNext", // 指定要使用的模板标准
    "declaration": false, // 输出类型声明文件
    "noImplicitAny": false, // 不允许变量或函数参数具有隐式any类型
    "removeComments": true, // 移除注释
    "moduleResolution": "node", //用于选择模块解析策略，有'node'和'classic'两种类型
    "esModuleInterop": true, //为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性
    "target": "es6", // 指定编译后的ECMAScript版本
    "sourceMap": true, // 用来指定编译时是否生成.map文件
    "lib": ["ESNext", "DOM"], // 指定要包含在编译中的库文件,如未指定会根据target注入默认列表
    "allowSyntheticDefaultImports": true, //指定允许从没有默认导出的模块中默认导入
    "experimentalDecorators": true, // 用于指定是否启用实验性的装饰器特性
    "forceConsistentCasingInFileNames": true, //是否强制代码中使用的模块文件名必须和文件系统中的文件名保持大小写一致
    "resolveJsonModule": true, //包含导入的模块.json的扩展。
    "strict": true, // 严格模式
    "skipLibCheck": true, // 用来控制是否在编译时进行库文件检查的
    "baseUrl": ".", // 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
    "paths": {
      // 用于设置模块名到基于baseUrl的路径映射
      "@packages": ["packages/*"]
    }
    // "types": [], // 用来指定需要包含的模块，只有在这里列出的模块声明文件才会被加载进来
    // "jsx": "preserve", // 指定jsx代码用于的开发环境
    // "allowJs": true, // 允许编译JS
    // "strictFunctionTypes": false, //用来指定是否使用函数参数双向协变检查
    // "noUnusedLocals": false, // 用于检查是否有定义了但是没有使用变量
    // "noUnusedParameters": true, // 用于检测是否在函数中没有使用的参数
    // "useDefineForClassFields": true, //将 class 声明中的字段语义从 [[Set]] 变更到 [[Define]]
  },
  "exclude": ["node_modules", "**/__tests__", "dist/**", "example"] // 不编译某些文件
}
```
