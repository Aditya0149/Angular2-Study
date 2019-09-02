import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyRouterModule } from './my-router/my-router.module';
import { StyleModule } from './style/style.module';

import { AppComponent } from './app.component';
import { LoggerComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './home/home.component';
import { DynamicHostComponent } from './dynamic-host/dynamic-host.component';
import { SelectHostDirective } from './select-host.directive';
import { InputComponent, SelectComponent } from './dynamic-host/dynamic-host.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { MyHhttpComponent } from './my-hhttp/my-hhttp.component';
import { MyTableDirective } from './my-table.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // all components/directivs/pipe used in this app should be declared here
    LoggerComponent,
    ChildComponent,
    DynamicHostComponent,
    SelectHostDirective,
    InputComponent,
    SelectComponent,
    HighlightDirective,
    UnlessDirective,
    MyHhttpComponent,
    MyTableDirective
  ],
  imports: [
    BrowserModule, // should import all modules which code is required.
    FormsModule,
    HttpClientModule,
    MyRouterModule,
    StyleModule
  ],
  exports: [ // components from declarations which you want to export to other modules. ( which code is required for other modules)
  ],
  providers: [
  ], // providers(services) for services/functions which will be available in this app. Will create one instace for app.
  entryComponents: [
    InputComponent,
    SelectComponent
  ],
  bootstrap: [AppComponent] // root component
})
export class AppModule { }
