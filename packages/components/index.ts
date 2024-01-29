import { App } from "vue";
import Button from "./button/index";
import Tag from "./tag";

export const VButton = Button;
export const VTag = Tag;

const components = [VButton, VTag];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
  VButton
};
