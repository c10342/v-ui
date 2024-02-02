import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
// @ts-ignore
import vui from "@packages/index";
import "@packages/theme-chalk/index.scss";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp(ctx) {
    const {app} = ctx
    app.use(vui);
  }
};

export default theme;
