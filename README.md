# Task Managment System

## 💻 Setup

### Native

Requirements:

-   [MongoDB](https://www.mongodb.com/docs/manual/installation/)
-   [Node.js](https://nodejs.org/en/)

Installation:

1. Run `npm install`
2. Rename `.env.example` to `.env` and enter environment variables
3. Run `npm run build` to compile the TS code
4. Run `npm start` to start the application

or just run `npm run flash` to start application for quick start

## 📂 Folder structure

-   `src/shared` utility functions and types used all across codebase
    -   `src/shared/config` configuration for application
    -   `src/api/middlewares` middlewares used for REST API
-   `src/modules` modules for REST API
    -   `src/modules/module_name/_api.ts` REST API router for module
    -   `src/modules/module_name/_controllers.ts` controllers for module
    -   `src/modules/module_name/_schemas.ts` validation schemas for module
    -   `src/modules/module_name/_types.ts` typescript types for module
    -   `src/modules/module_name/rest.ts` services/use-cases for module
-   `src/db` database connection
-   `src/models` database models used across services
