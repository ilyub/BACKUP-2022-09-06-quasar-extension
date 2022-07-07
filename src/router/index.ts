import { routes } from "../routes";
import { a, evaluate } from "@skylib/functions";
import { route } from "quasar/wrappers";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";
import type { RouterScrollBehavior } from "vue-router";

export default route(() => {
  const createHistory = evaluate(() => {
    switch (process.env.VUE_ROUTER_MODE) {
      case "history":
        return createWebHistory;

      case "hash":
        return createWebHashHistory;

      default:
        throw new Error("Unexpected router mode");
    }
  });

  return createRouter({
    history: createHistory(
      process.env.MODE === "ssr" ? undefined : process.env.VUE_ROUTER_BASE
    ),
    routes: a.clone(routes),
    scrollBehavior: (): ReturnType<RouterScrollBehavior> => ({
      left: 0,
      top: 0
    })
  });
});
