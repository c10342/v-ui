import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

const resolvePack = (...args: any) => {
  return path.resolve(__dirname, "../packages", ...args);
};

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    // 运行环境
    environment: "happy-dom",
    // 需要包含的测试文件
    include: ["packages/**/__tests__/*.{test,spec}.?(c|m)[jt]s?(x)"],
    coverage: {
      // 测试报告覆盖的范围
      include: ["packages/**/*.vue", "packages/**/*.ts", "packages/**/*.tsx"],
      //   测试报告忽略的范围
      exclude: [
        "packages/**/__tests__/**",
        "packages/locale/**",
        "packages/types/**"
      ]
    }
  },
  resolve: {
    alias: [
      {
        find: "@packages",
        replacement: resolvePack()
      }
    ]
  }
});
