import { App } from "vue";
import Button from "./button/index";

export const VButton = Button;

const components = [VButton];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
  VButton
};
