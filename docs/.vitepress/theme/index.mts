import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
// @ts-ignore
import vui from "@packages/index";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "@packages/theme-chalk/index.scss";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vui);
    app.component("demo-preview", ElementPlusContainer);
  }
};

export default theme;
