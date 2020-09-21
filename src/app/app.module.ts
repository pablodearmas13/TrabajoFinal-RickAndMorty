import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RickAndMortyService} from "./rick-and-morty.service"

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { NgModuleFactory } from '@angular/core/src/r3_symbols';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RickAndMortyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
