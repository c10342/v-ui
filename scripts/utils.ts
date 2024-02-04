import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

export const resolvePack = (...args: any) => {
  return path.resolve(__dirname, "../packages", ...args);
};

export const resolveRoot = (...args: any) => {
  return path.resolve(__dirname, "../", ...args);
};

export const config = defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    // 路径别名
    alias: [
      {
        find: "@packages",
        replacement: resolvePack()
      }
    ]
  }
});
