import defineMessages from "./defineMessages";

export const { globalHelloMessage, globalSayHi } = defineMessages({
  globalHelloMessage: {
    key: "global.Hello.key",
    en: "english Hello World",
    de: "german Hellio Warld",
  },
  globalSayHi: {
    en: "Say Hi",
  },
});
