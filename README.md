[![Depfu](https://badges.depfu.com/badges/4b1166cf110842ec49787e0acf8f8723/overview.svg)](https://github.com/choiruladamm/dojo-blog/tree/Development)
[![CI](https://github.com/alex-kim-dev/vite-react-template/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/choiruladamm/dojo-blog/tree/Development)

# Vite React template

## Features

- Vite
  - html minification, EJS template
  - import aliases
  - importing SVGs as react components
  - CSS / preprocessors / modules [support](https://vitejs.dev/guide/features.html#css)
- React
- Typescript
- React Testing Library, test utils
- Eslint: airbnb config, prettier integration, import & props sorting
- Stylelint: standard config, prettier integration, css props sorting
- Editorconfig & Prettier
- Commitlint: conventional commits
- pre-commit hook for linting/testing/typechecking staged files
- CI on push & pr, in-progress workflow cancelling if a new one is queued, dependencies caching
- pinned versions of dependencies

## Usage

1. Click the clone locally:

   ```sh
   git clone https://github.com/choiruladamm/dojo-blog.git
   ```

2. Install the dependencies / node modules:

   ```sh
   npm install
   ```

3. Change the name, description, author, license, links in `package.json`.
4. Check out the available scripts in `package.json` or execute `npm run`.

To add import aliases, edit these two:

- `path` in `tsconfig.json`
- `moduleNameMapper` in `jest.config.json` - order matters
