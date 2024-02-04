import { createApp } from "vue";
import vui from "@packages/index";
import App from "./App.vue";
import router from "./router";
import "@packages/theme-chalk/index.scss";

const app = createApp(App);
app.use(router);
app.use(vui);
app.mount("#app");
