import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Chaild01Component } from './parent/chaild01/chaild01.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Chaild01Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
