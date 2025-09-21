const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
require('dotenv').config();
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
      url: "https://www.facebook.com",
      show: true,
    },
    AI: {},
  },
  include: {
    I: "./steps_file.js",
  },
  name: "codeceptAI",
  ai: {
    /**Groq - Free alternative */
    request: async (messages) => {
      const Groq = require("groq-sdk");
      const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
      });

      const chatCompletion = await groq.chat.completions.create({
        messages,
        model: "llama-3.1-8b-instant", // Latest working model
      });
      return chatCompletion.choices[0]?.message?.content || "";
    },

    /**OpenAI - Requires valid billing/credits */
    // request: async (messages) => {
    //   const OpenAI = require("openai");
    //   const openai = new OpenAI({
    //     apiKey: process.env.OPENAI_API_KEY,
    //   });

    //   const completion = await openai.chat.completions.create({
    //     model: "gpt-4o-mini-2024-07-18",
    //     messages,
    //   });

    //   return completion?.choices[0]?.message?.content || "";
    // },
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
