# Monorepo starter template for JavaScript/TypeScript projects

Template versions in different branches:

- `main`: version for creating packages
- `application`: version for webapps (using Next.JS)
- `docker`: dockerized version of `application`

## Getting Started

To create a new monorepo using this template:

```
git clone -b main git@github.com:andyjy/monorepo-template.git my-new-monorepo
cd my-new-monorepo
npm run monorepo-eject
```

.. then start your project, commit, add git remote and push

## Includes:

- npm workspaces
- [lerna](https://github.com/lerna/lerna) monorepo management
  - release scripts to manage versioning and publishing to npm, using [Conventional Commits](https://www.conventionalcommits.org/) for [semantic versioning](https://semver.org/):
    - `npm run release` for releases from `main`
    - `npm run release-canary` for canary releases from `canary`
    - [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) changelog generation
- [Emojional-commitment](https://github.com/andyjy/emojional-commitment) to bring some emojion to a [Conventional](https://www.conventionalcommits.org/) commit history
- Next.js-ready (compatable typescript, eslint config etc)
- typescript - `npm run typecheck`
- jest - `npm run test`
- eslint - `npm run lint`
- prettier
- husky git hooks:
  - `pre-commit` with lint-staged for staged changes: typecheck, lint/fix, and prettier-ify
  - `commit-msg`: rewrite commit messages with [emojional-commitment](https://github.com/andyjy/emojional-commitment)
- editorconfig
- .vscode

## Workspace package folders:

- `packages/`
  - `_monorepo-utils`: base config files & util scripts
  - `_eslint-config-monorepo-utils`: eslint base config
  - `example-package`: example typescript package
