const js = require("@eslint/js");
const security = require("eslint-plugin-security");

module.exports = [
  // Base recommended ESLint rules
  js.configs.recommended,

  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",

      // Node.js environment
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },

    plugins: {
      security,
    },

    rules: {
      "security/detect-object-injection": "error",
      "security/detect-non-literal-regexp": "warn",
      "security/detect-unsafe-regex": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-child-process": "warn",
      "security/detect-disable-mustache-escape": "warn",
      "security/detect-no-csrf-before-method-override": "warn",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-non-literal-require": "warn",
      "security/detect-eval-with-expression": "error",
      "security/detect-pseudoRandomBytes": "warn",

      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "no-with": "error",

      "no-console": "off",
      "no-unused-vars": ["error", { args: "none" }],
    },
  },
];
