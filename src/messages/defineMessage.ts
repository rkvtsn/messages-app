import CONFIG from "./config";
import { MessagesBundleType } from "./types";
import { MessageValue } from "./types";

/**
 * Bundle for message records
 */
export let MESSAGES: MessagesBundleType = {};

/**
 * Convert Partial to Strict message record
 * @param partialMessage {Partial<MessageValue>} message record with optional fields
 * @returns {MessageValue} Strict message for record
 */
const partialMessageToMessage = (
  partialMessage: Partial<MessageValue>
): MessageValue => {
  if (!partialMessage.key) throw new Error("Key is required");
  const temp: Partial<MessageValue> = { key: partialMessage.key };
  for (const lang of CONFIG.languages) {
    temp[lang] = lang in partialMessage ? partialMessage[lang] : "";
  }
  return temp as MessageValue;
};

/**
 * Makes record for translator and bundler
 * @param message {Partial<MessageValue>} message object
 * @returns {string} key of message object
 */
export const defineMessage = (message: Partial<MessageValue>): string => {
  const msg = partialMessageToMessage(message);
  const { key } = msg;

  if (Object.keys(MESSAGES).includes(key)) {
    console.warn(`[MESSAGES]: "${key}" has been overridden`);
    console.warn(`[MESSAGES]: {${key}: ${{ msg }}}`);
  }
  MESSAGES[key] = msg;

  return key;
};

export default defineMessage;
