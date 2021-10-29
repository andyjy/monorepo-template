# Monorepo starter template for JavaScript/TypeScript projects

Template versions in different branches:

- `main`: version for creating packages
- `application`: version for webapps (using Next.JS)
- `docker`: dockerized version of `application`

## Getting Started

To create a new monorepo using this template:

```
git clone git@github.com:andyjy/monorepo-template.git my-new-monorepo
cd my-new-monorepo
npm install
npx monorepo-eject
```

.. then start your project, commit, add git remote and push

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
