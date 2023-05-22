import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import relativeTime from "dayjs/plugin/relativeTime.js";
import ja from "dayjs/locale/ja";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(relativeTime);
  dayjs.extend(isBetween);
  dayjs.locale(ja);
  nuxtApp.provide("dayjs", dayjs);
});

declare module "#app" {
  interface NuxtApp {
    dayjs: dayjs.Dayjs;
  }
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    dayjs(date?: dayjs.ConfigType): dayjs.Dayjs;
  }
}
