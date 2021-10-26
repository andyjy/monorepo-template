// We're using ESLint for linting:
//  - JavaScript (as designed)
//  - TypeScript (via typescript-eslint <- eslint-config-next <- next/core-web-vitals)

module.exports = {
  extends: ["./node_modules/@andyjy/monorepo-utils/eslint-base.js"],
};
