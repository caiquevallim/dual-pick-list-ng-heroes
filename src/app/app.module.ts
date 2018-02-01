import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DualPickListModule} from "dual-pick-list-ng";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DualPickListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
