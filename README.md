# README

This repository stores both the UI and API tests using same framework..

It uses modern languages, tools, and libraries that are well-known in the testing world:

- [JavaScript](https://www.javascript.com/): The world's most popular programming language of the Web.
- [Cypress](https://www.cypress.io/): UI and API testing platform

## Development environment

[Visual Studio Code](https://code.visualstudio.com/) is the recommended code editor, because:

- It's free;
- Available in Windows, Linux and macOS;
- Great extensions for Cypress, and Docker;
- This project already includes all the configurations for a productive environment.

IntelliJ WebStorm, or IDEA Ultimate, are also good choices, but are paid, so it's a matter of choice!

### Visual Studio Code

Start by downloading and installing Visual Studio Code in your machine.

Then install the following extensions:

- [Node.js](https://nodejs.org/en/download/)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Running the tests

Start by running `npm install`, using the provided `nvmw` command:

    ./nvmw npm install

Then you can open the Cypress Test Runner to execute the tests, and see them running:

    ./nvmw npm run cypress:open

You can also run the tests in headless mode:

    ./nvwm npm test

This repository also contains a `Dockerfile`, so tests will run in [Docker]

## Writing new tests

Test cases must go into the `cypress/integration` folder, with the `.js` extension. The plugins in VS Code should provide syntax highlighting and step completion, making the writing of test easier.

Page object that are meant to be used by any test, must go into the `cypress/integration/pages/` folder, with the `.js` (JavaScript) extension.

You can open the Cypress Test Runner (`./nvmw npm run cypress:open`) to see the tests being executed every time you save a test.