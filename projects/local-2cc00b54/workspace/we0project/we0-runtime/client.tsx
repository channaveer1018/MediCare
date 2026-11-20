import "./lib/iframe-error-reporter";
import appConfig from "../src/we0-app";
import { hydrateWe0App } from "./client-entry";

hydrateWe0App(appConfig);

if (import.meta.hot) {
  import.meta.hot.accept();
}
