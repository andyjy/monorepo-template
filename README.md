# Monorepo starter template for JavaScript/TypeScript projects

Template versions in different branches:

- `main`: version for creating packages
- `application`: version for webapps (using Next.JS)
- `docker`: dockerized version of `application`

## Getting Started

To create a new monorepo using this template:

1. git clone git@github.com:andyjy/monorepo-template.git
2. npm install
3. npx monorepo-eject

.. then start your project, commit, configure remote and push

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
  - `_monorepo-utils`: base config files & util scripts
  - `_eslint-config-monorepo-utils`: eslint base config
