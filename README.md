# Nobl9 QA recrutiment task
Simple test of Nobl9 page.

# Table of contents
1. [Getting started](#installation)
    * [Installing Node.js](#node)
    * [Installing Yarn](#yarn)
    * [Working with the repo locally](#locally)
    * [Run test](#test)
## Getting started<a name="installation"></a>

### Installing Node.js<a name="node"></a>
Node.js can be downloaded [here](https://nodejs.org/en/).
Please be sure you have Node.js and npm (node package manager that comes along with Node) in your OS environment path to run from the command-line interface.

### Installing Yarn<a name="yarn"></a>
To manage dependencies, please use Yarn that can be downloaded [here](https://yarnpkg.com/).

### Working with the repo locally<a name="locally"></a>

- navigate to the directory in which you want to clone the repository 

- install all dependencies from the project root (where the package.json file is located). It will install all the required modules in the node_modules folder. This folder is not versioned and has to be installed manually.
```
yarn
```

### Run test<a name="test"></a>
- run test from the root directory
```
yarn test
```

or execute
```
yarn test:ui
```
to open the Test Runner in an interactive mode.
