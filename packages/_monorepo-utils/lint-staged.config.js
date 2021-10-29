module.exports = {
  // for staged changes to files:

  // - run type-check on typescript
  "**/*.ts?(x)": (filenames) =>
    `npx tsc-lint-staged ${filenames
      .map((file) => "'" + file.replace("'", "?") + "'")
      .join(" ")}`,

  // - lint/fix typescript/javascript (with eslint)
  "**/*.(ts|js)?(x)": (filenames) => [
    `npx next-lint-staged ${filenames
      .map((file) => "'" + file.replace("'", "?") + "'")
      .join(" ")}`,
  ],

  // - format everything with prettier (excluding .prettierignore matches)
  "**.*": (filenames) =>
    `prettier --write --ignore-unknown ${filenames
      .map((file) => "'" + file.replace("'", "?") + "'")
      .join(" ")}`,
};
