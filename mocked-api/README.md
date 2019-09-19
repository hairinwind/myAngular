# MockedApi

This is the sample project following https://atom-morgan.github.io/how-to-mock-an-api-in-angular/
This example is putting the mock data in the service.  
The steps below are moving the data into json-server, a mockup service.

https://www.npmjs.com/package/json-server  
npm install --save-dev jason-server

create file jason_server/db.json  
add fighters data to db.json
start the jason_server "json-server --watch json_server/db.json --port 3000 --delay 500"  
You shall see json object when visiting http://localhost:3000/fighters  

create proxy.conf.json
add this under architect >> serve >> options  in file angular.json
```
"proxyConfig": "./proxy.conf.json"
```
create http get request
fighters.service.ts
```
import { HttpClient } from '@angular/common/http';
...
get() {
    return this.http.get('api/fighters');
}
```
app.module.ts
```
import { HttpClientModule } from '@angular/common/http';
...
imports: [
    BrowserModule,
    HttpClientModule,
],
```
Now, visit http://localhost:4200, the data is from jason-server.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
