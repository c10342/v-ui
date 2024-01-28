// 把vue组件的props转化为对应的类型，参考defineProps的返回类型写法

import { ExtractPropTypes } from "vue";

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type BuildPropsToInterface<T> = Prettify<Readonly<ExtractPropTypes<T>>>;
