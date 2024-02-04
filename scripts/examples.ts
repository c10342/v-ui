import { defineConfig, mergeConfig } from "vite";
import { config, resolveRoot } from "./utils";

const examplesConfig = defineConfig({
  build: {
    rollupOptions: {
      input: resolveRoot("./examples/index.html")
    }
  }
});

export default mergeConfig(config, examplesConfig);
