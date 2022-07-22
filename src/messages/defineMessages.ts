import defineMessage from "./defineMessage";
import { DefineMessagesType, MessageValue } from "./types";

/**
 * @example
 * const myComponentMessages = defineMessages({
 *  buttonHelloMessage: "Hello Sir!",
 *  buttonBetMessage: {
 *      key: "component.bet.button",
 *      en: "Fire on Bet",
 *  }
 * })
 * 
 * @todo default languages
 * @param messages {Partial<MessageValue> | string}
 * @returns {Record<string, string>} bundle of key:key
 */
const defineMessages = (messages: DefineMessagesType): Record<string, string> => {
  const bundle: Record<string, string> = {};
  for (const key of Object.keys(messages)) {
    const message = messages[key];
    const value: Partial<MessageValue> =
      typeof message === "string" || message instanceof String
        ? { key, en: message as string }
        : { key, ...message };
    defineMessage(value);
    bundle[key] = value.key || key;
  }

  return bundle;
};

export default defineMessages;
