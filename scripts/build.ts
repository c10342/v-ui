import { defineConfig, mergeConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import pck from "../package.json";
import { config, resolvePack, resolveRoot } from "./utils";

const resolveDist = (...args: any) => {
  return path.resolve(__dirname, "../dist", ...args);
};

const input = resolvePack("index.ts");

const getDep = () => {
  const devDependencies = pck.devDependencies || {};
  const peerDependencies = pck.peerDependencies || {};
  const dependencies = pck.peerDependencies || {};
  return [
    ...Object.keys(devDependencies),
    ...Object.keys(peerDependencies),
    ...Object.keys(dependencies)
  ];
};

const buildConfig = defineConfig({
  build: {
    rollupOptions: {
      // 打包的时候排除掉package.json中的依赖
      external: getDep(),
      // 入口文件
      input,
      output: [
        {
          // 打包格式
          format: "es",
          // 打包后文件名
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          // 配置打包根目录
          dir: resolveDist("es")
        },
        {
          // 打包格式
          format: "cjs",
          // 打包后文件名
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          // 配置打包根目录
          dir: resolveDist("lib")
        }
      ]
    },
    // 构建为库
    lib: {
      entry: input,
      // 暴露的全局变量
      name: "vUi"
    }
  },
  plugins: [
    // 生成类型声明文件
    dts({
      entryRoot: resolvePack(),
      outDir: [resolveDist("./types")],
      // 指定使用的tsconfig.json为我们整个项目根目录下
      tsconfigPath: resolveRoot("./tsconfig.json")
    })
  ]
});

export default mergeConfig(config, buildConfig);
