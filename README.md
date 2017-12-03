# ng-module-template

## Install

`  git clone https://github.com/angular-patterns/ng-module-template.git
   cd ng-module-template
   npm install
`

## Development

Opens webpack-dev-server on port 8080 for development:

`  npm run dev`

## Test

There are three type of tests: 

1. Unit Tests - `npm run test`
2. e2e Tests - `npm run e2e`
3. lint Tests - `npm run lint`

## Production Builds

You have two options for a production build:

1. Angular Application - outputs to the `dist` folder.<br/>
  `npm run build`
 
2. Reusable Angular Module - outputs to the `dist` folder.<br/>
  `npm run build-module`
  
## Deployment

There are two options for deployment.

1. Deploy to local file system<br/>
  `npm run publish-local` - publishes the output `dist` folder to `c:\packages`.  
  
  The folder can be customized using a `dest` parameter:<br/>
  `npm run publish -- --dest c:\custom-folder`
  
2. Publish to npm<br/>
  `npm publish`<br/>
  Follow the publish instructions from npm: https://docs.npmjs.com/getting-started/publishing-npm-packages
  
   

