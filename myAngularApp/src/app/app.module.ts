import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import {AppComponent} from './app.component';
import {HerosComponent} from './heros/heros.component';
import {MyAsyncComponent} from './my-async/my-async.component';
import {MyService} from './my-async/myService';


@NgModule({
    declarations: [
        AppComponent,
        HerosComponent,
        MyAsyncComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule
    ],
    providers: [MyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
