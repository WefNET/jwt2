import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ArmorCalcComponent } from './components/armor-calc/armor-calc.component';
import { HomeComponent } from './components/home/home.component';
import { FaithCalcComponent } from './components/faith-calc/faith-calc.component';
import { ServersComponent } from './components/servers/servers.component';

import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ArmorCalcComponent,
    HomeComponent,
    FaithCalcComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    OnsenModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
