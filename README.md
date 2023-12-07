

This repository contains Cypress automated tests with implemented cucumber for the Pagination Function of a web application hosted on https://techglobal-training.com/frontend/project-5 The tests cover various scenarios, including "Validate the main content", "Validate the Pagination Next/Previous buttons", "Validate the Pagination Cities content". 

Prerequisites to run this tests.

1. Make sure you have Node.js and npm installed on your machine, this creates a package.json file.

2. Then, install Cypress using "npm install cypress --save -dev". This will download Cypress and save it as a devDependency in your project.

3. Clone this repository to your local machine. git clone https://github.com/YuriiBazhenov/CypressProject02

Cucumber Installation

If we want to use Cypress with Cucumber, we must install the following 
dependency, you can run the following command in the project 
directory:
  "npm install --save-dev  @badeball/cypress-cucumber-preprocessor"


Since we’re currently using JavaScript, our configuration file is (cypress.config.js),  
so we’ll need to change its extension to .ts (for TypeScript) to avoid errors. This 
change is necessary to match the configuration setup shown in the documentation.
On VSCode, right-click on cypress.config.js, select rename, remove .js, and change 
its extension to .ts. Now, we must clear the contents of the cypress.config.ts file and replace it with the code 
provided below 

import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});

After pasting that code, you'll notice errors on lines 2 and 4. The reason 
we are getting the error on line 2, it’s that it can’t locate the related package in our 
dependencies. To solve this issue, we must download that dependency.

    "npm install --save-dev @bahmutov/cypress-esbuild-preprocessor"

After that we have to install TypeScript, use the below command

    "npm i typescript"

After TypeScript is installed, we have to create a file, "tsconfig.json" and put there folow code:

{
    "compilerOptions": {
        "esModuleInterop": true,
      "paths": {
        "@badeball/cypress-cucumber-preprocessor/*": ["./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/*"]
      }
    }
  }


The following tools are used in this project:

JavaScript
Cypress
Cucumber

step-definitos folder contais test.js file which represents real code from feature file or another word test case.
A step definition is the actual code implementation of the feature file Gherkin steps. .

featutes folder contains feature file it's what we create first and define our test scenario using the Gherkin language.

Pages this folder contains the Project05.js file it defines methods and switch cases and storing all web elements, which are used in this project and stands for reducing code duplication and improves test case maintenance.