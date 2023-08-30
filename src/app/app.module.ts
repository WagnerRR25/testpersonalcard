import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NomesComponent } from './nomes/nomes.component';

import { NomesService } from './nomes.service';


@NgModule({
  declarations: [
    AppComponent,
    NomesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, NomesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
