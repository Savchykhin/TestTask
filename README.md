# Guide to Cypress e2e Tests

## Contents

-   [Getting Started](#getting-started)
-   [Tooling](#tooling)

## Getting Started

-   Q: How do I install Cypress?

    A: Cypress should be installed along with everything else when you run `npm install`.

-   Q: How do I run Cypress tests?

    A: You can run Cypress with nopm scripts `cy:open:prod` and `cy:run:prod`.

-   Q: How do I run Cypress tests in CI?
    A: The example of Github Actions worklfow that runs on every pull request is in `.github/workflows/cypress-pr.yml`.

## Tooling

### TypeScript

Typescript is used to define types for our custom commands in `cypress/support/index.ts`.
This roots from desire to validate that common code works correctly when several teams can be writing e2e tests at the same time.

Furthermore, when you write custom commands and provide TypeScript definitions for them, you can use the triple slash directives to enable IntelliSense: `/// <reference path="<RELATIVE_PATH_TO_support/index.ts" />`.

The below lines should be added at the top of every file where `cy.**` commands are used:

```
    // ts check and error linting
    // @ts-check

    // type definitions for Cypress object "cy"
    /// <reference types="cypress" />

    // type definitions for custom commands
    /// <reference path="<RELATIVE_PATH_TO_support/index.ts" />
```

### ESLint

EsLint config in `/cypress/.eslintrc.js` extends `eslint:recommended`, `plugin:cypress/recommended`, `plugin:chai-friendly/recommended`,
and `prettier`. Lint check is configured to run on every commit with Husky pre-commit hook.