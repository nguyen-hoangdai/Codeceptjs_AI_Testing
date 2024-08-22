const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

require("./heal");

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://github.com",
      show: true,
    },
    AI: {},
  },
  include: {
    I: "./steps_file.js",
  },
  name: "codeceptAI",
  ai: {
    /**Grob */
    // request: async (messages) => {
    //   const Groq = require("groq-sdk");
    //   const groq = new Groq({
    //     apiKey: "",
    //   });

    //   const chatCompletion = await groq.chat.completions.create({
    //     messages,
    //     model: "mixtral-8x7b-32768", // llama2-70b-4096 || gemma-7b-it
    //   });
    //   return chatCompletion.choices[0]?.message?.content || "";
    // },

    /**Openai */
    request: async (messages) => {
      const OpenAI = require("openai");
      const openai = new OpenAI({
        apiKey: "",
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini-2024-07-18",
        messages,
      });

      return completion?.choices[0]?.message?.content || "";
    },
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    heal: {
      enabled: true,
    },
  },
};
