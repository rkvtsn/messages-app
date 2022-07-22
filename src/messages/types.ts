import CONFIG from "./config";

export interface MessageBundlerConfiguration {
  languages: readonly string[];
  localizationDir: string;
}

export type MessageLanguageType = Record<
  typeof CONFIG.languages[number],
  string
>;

export type DefineMessagesType = Record<string, string | Partial<MessageValue>>;

export interface MessageValue extends MessageLanguageType {
  key: string;
}

export type MessagesBundleType = Record<string, MessageValue>;
