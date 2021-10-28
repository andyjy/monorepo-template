# Monorepo starter template for JavaScript/TypeScript projects

Template versions in different branches:

- `main`: version for creating packages
- `application`: version for webapps (using Next.JS)
- `docker`: dockerized version of `application`

## Includes:

- npm workspaces
- lerna
- eslint
- prettier
- lint-staged
- husky pre-commit hook
- editorconfig
- .vscode
- typescript
- jest

## Workspace package folders:

- `packages/`
  - `monorepo-utils`: base config files & util scripts
  - `eslint-config-monorepo-utils`: eslint base config
