import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RestHouseService } from './service/rest.houses.service';
import { NoCommaPipe } from './custompipe.component';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    NoCommaPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,

  ],
  providers: [RestHouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
