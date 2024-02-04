import { defineConfig, mergeConfig } from "vitest/config";
import { config } from "./utils";

const testConfig = defineConfig({
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
  }
});

export default mergeConfig(config, testConfig);
