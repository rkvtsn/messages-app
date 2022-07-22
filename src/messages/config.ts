import { MessageBundlerConfiguration } from "./types";

export const CONFIG: MessageBundlerConfiguration = Object.freeze({
  languages: ["en", "de", "tu", "hn"] as const,
  localizationDir: "./src/localization/",
});
export default CONFIG;
