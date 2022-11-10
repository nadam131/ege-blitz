module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  globals: {
    JSX: true,
  },
  extends: [
    "eslint:recommended",
    "./node_modules/@blitzjs/next/eslint",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },

  // rules: {
  //   "additional-rule": "warn",
  //    ...
  // },
}
