# Custom Monorepo with Turbo Express.JS & Next.JS starter

This Monorepo starter is Customized with `Turborepo`, `Express.JS` for api, and `Next.JS` for client.

This example also shows how to use [Workspace Configurations](https://turbo.build/packages/docs/core-concepts/monorepos/configuring-workspaces).

## Using this example

Run the following command:

```sh
git clone https://github.com/maymiquy/express-next-monorepo.git example-name
```

```sh
cd example-name
```

```sh
pnpm install
```

## What's inside?

This Turborepo includes the following packages and apps:

```
root-project/
│── apps/
│   ├── api/               # Express.js API
│   │   ├── src/
│   │   │   ├── __test__/
│   │   │   ├── config/
│   │   │   ├── exception/
│   │   │   ├── middleware/
│   │   │   ├── routes/
│   │   │   ├── index.ts
│   │   │   ├── server.ts
│   │   ├── package.json
│   ├── client/            # Next.js frontend
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── components/
│   │   ├── package.json
│── packages/
│   ├── eslint-config/     # Shared ESLint configuration
│   ├── jest-presets/      # Jest testing configurations
│   ├── logger/            # Logger utility
│   ├── typescript-config/ # Shared TypeScript configuration
│── .gitignore
│── .npmrc
│── package.json
│── pnpm-workspace.yaml
│── turbo.json
```

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `client`: a [Next.js](https://nextjs.org/) app
- `@packages/eslint-config`: ESLint configurations used throughout the monorepo
- `@packages/jest-presets`: Jest configurations
- `@packages/logger`: isomorphic logger (a small wrapper around console.log)
- `@packages/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
