import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const components = (import.meta as any).glob("../components/*.vue");

// 组件名
const getFileName = (name: string) => {
  const arr = name.split("/");
  const names = arr[arr.length - 1].split(".");
  return names[0];
};

const getRoutes = () => {
  const routes: RouteRecordRaw[] = [];
  Object.keys(components).forEach((key) => {
    const name = getFileName(key);

    routes.push({
      path: `/${name}`,
      name,
      component: components[key]
    });
  });
  return routes;
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes()
});
export default router;
