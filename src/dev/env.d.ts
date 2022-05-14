declare namespace NodeJS {
  interface ProcessEnv {
    readonly DEBUGGING: boolean;
    readonly MODE: string;
    readonly VUE_ROUTER_BASE: string;
    readonly VUE_ROUTER_MODE: string;
  }
}
