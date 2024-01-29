import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import pck from "../package.json";

const resolveDist = (...args: any) => {
  return path.resolve(__dirname, "../dist", ...args);
};

const resolvePack = (...args: any) => {
  return path.resolve(__dirname, "../packages", ...args);
};
const resolveRoot = (...args: any) => {
  return path.resolve(__dirname, "../", ...args);
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

export default defineConfig({
  build: {
    rollupOptions: {
      external: getDep(),
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
    lib: {
      entry: input,
      name: "dist"
    },
    cssCodeSplit: false
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: resolvePack(),
      outDir: [resolveDist("./types")],
      // 指定使用的tsconfig.json为我们整个项目根目录下
      tsconfigPath: resolveRoot("./tsconfig.json")
    })
  ],
  resolve: {
    alias: [
      {
        find: "@packages",
        replacement: resolvePack()
      }
    ]
  }
});
