# Angular_core

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Example: `ng generate component shared/nav` => `ng g c shared/nav`

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `npm run build:base-href` the same build as on top but with base-path parameter. Command example: `npm run build:base-href "/public/"`.
Run `npm run serve:build` to serve production build. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Config

Run `npm run config` config is task that have access to `process.env` and generate environment used in Angular. 

## Release

Run `npm run release` create new version of application with tag and add all commits to CHANGELOG.md file, need push automatically. 

## PWA

To enable service worker and other useful PWA fetcher go to angular configuration in `./angular.json` and set `"serviceWorker": true`.

## Class-transformer

To project added [Class-transformer](https://github.com/typestack/class-transformer) allows you to transform plain object to some instance of class and versa. Also it allows to serialize / deserialize object based on criteria.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
