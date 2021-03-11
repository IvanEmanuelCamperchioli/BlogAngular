import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';

import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ViewsModule,
    HttpClientModule
  ], 
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
