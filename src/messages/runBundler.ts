import { writeFileSync, readFileSync } from "fs";
import "./index";
import { MESSAGES } from "./defineMessage";
import { MessageLanguageType } from "./types";
import CONFIG from "./config";

export const runBundler = () => {
  console.log("messages begin...");

  const messages: Record<string, MessageLanguageType> = {};

  for (const key of Object.keys(MESSAGES)) {
    for (const language of CONFIG.languages) {
      const message = MESSAGES[key]?.[language]
        ? MESSAGES[key]?.[language]
        : "";
      if (!messages[language]) {
        messages[language] = {};
      }
      messages[language] = {
        ...messages[language],
        [key]: message,
      };
    }
  }

  for (const language of CONFIG.languages) {
    writeBundle(messages, language);
  }

  console.log("messages finished...");
};

const readBundle = () => {
  
}

const writeBundle = (
  messages: Record<string, MessageLanguageType>,
  language: string
) => {
  if (messages) {
    const messagesJson = JSON.stringify(messages);
    writeFileSync(
      `${CONFIG.localizationDir}${language}.json`,
      messagesJson,
      "utf8"
    );
  }
};

export default runBundler;
