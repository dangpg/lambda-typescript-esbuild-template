# lambda-typescript-esbuild-template

Personal template for writing AWS Lambda functions using SAM, TypeScript and esbuild.

**Overview**:

- Write code in TypeScript
- Bundle code with esbuild during development and [deployment](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-build-typescript.html)
- Write tests with Jest
- ESLint and Prettier support
- NPM scripts for build, watch, local invocation and debugging
- Debugging via VSCode (attaching to exposed debug port)
- Single source of truth for env variables (`env.json`)
- Deployment done via script (`scripts/deploy.js`)

**How to use**

1. Close repository
2. Delete `.git` folder to start with clean history
3. Run `npm install` in root (`/`) and lambda folder (`lambdas/hello-world`)
4. Rename folders according to use case
5. Code and have fun!

**npm scripts**

| Folder | npm script     | Description                                   |
| ------ | -------------- | --------------------------------------------- |
| root   | `clean`        | Deletes local `.aws.sam` folder               |
| root   | `build`        | Build SAM project                             |
| root   | `deploy`       | Deploy project to AWS                         |
|        |                |
| lambda | `test`         | Run all test files                            |
| lambda | `lint`         | Run linter                                    |
| lambda | `start-api`    | Start local API to trigger lambda             |
| lambda | `local-invoke` | Directly invoke lambda                        |
| lambda | `debug`        | Same as `local-invoke` but exposes debug port |
