import createAppModule from "../createAppModule";
import Config from "./Config";

export const [
  AppConfigProvider,
  useAppConfig,
] = createAppModule(Config)
