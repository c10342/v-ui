import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
// @ts-ignore
import vui from "@packages/index";
import "@packages/theme-chalk/index.scss";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";

// https://www.npmjs.com/package/vitepress-theme-demoblock
const theme: Theme = {
  ...DefaultTheme,
  enhanceApp(ctx) {
    const { app } = ctx;
    app.use(vui);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  }
};

export default theme;
