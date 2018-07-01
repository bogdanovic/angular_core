const fs = require('fs');
import { writeFile } from 'fs';
import { argv } from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment || 'prod';
const isProd = environment === 'prod';
let serviceWorker = false;

try {
  // Try get serviceWorker status:
  const angularConfig = JSON.parse(fs.readFileSync('./angular.json', 'utf8'));
  serviceWorker = angularConfig.projects['skeleton-angular'].architect.build.configurations.production.serviceWorker;
} catch (e) {
  console.warn('serviceWorker - error.');
}


const targetPath = `./src/environments/environment.${environment}.ts`;

const config = {
  title: `Skeleton Angular ${environment.toUpperCase()}`,
  baseUrl: '/production',
  production: isProd,
  serviceWorker: serviceWorker
};

const envConfigFile = `
// Generated from set-env.ts files;
export const environment = ${JSON.stringify(config, null, 2)};
`;

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
