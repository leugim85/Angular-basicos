import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { heroesModule } from './Heroes/Heroes.module';
import { contadorModule } from './Contador/contador.module';

@NgModule({ 
  declarations: [
    AppComponent,
        ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule  
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
