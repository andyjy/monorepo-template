// We're using ESLint for linting:
//  - JavaScript (as designed)
//  - TypeScript (via typescript-eslint <- eslint-config-next <- next/core-web-vitals)

module.exports = {
  // order matters - prettier goes last
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "plugin:security-node/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "next/core-web-vitals",
    "prettier",
  ],

  rules: {
    // uncomment to suppress "pages directory not found" error if no next.js project in repo
    //"@next/next/no-html-link-for-pages": ["error", "./"],

    // override node/recommended rules
    // we use instead eslint-plugin-import for validating module imports
    // (which uses resolvers eslint-import-resolver-node and eslint-import-resolver-typescript,
    // configured via eslint-config-next)
    "node/no-missing-import": "off",
    "node/no-missing-require": "off",
    "node/no-extraneous-import": "off",
    "node/no-extraneous-require": "off",
    // eslint-plugin-node@11.1.0 always errors these features due to no info on supported node version
    // so we ignore these checks until such time as the plugin may be updated
    // - e.g. https://github.com/mysticatea/eslint-plugin-node/pull/286
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        ignores: ["modules", "bigint", "dynamicImport"],
      },
    ],

    // eslint-plugin-import/recommended analysis/correctness
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",

    // eslint-plugin-import/recommended red flags (thus, warnings)
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-duplicates": "warn",

    // jest
    // override for jest/style
    "jest/no-alias-methods": "off",
  },

  parserOptions: {
    ecmaVersion: 2020,
  },

  ignorePatterns: ["**/*.d.ts", "**/node_modules", "**/dist"],
};
