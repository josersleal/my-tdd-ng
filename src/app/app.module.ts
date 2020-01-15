import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomesComponent } from './src/components/homes/homes.component';
import { HeaderComponent } from './src/components/header/header.component';
import { DataComponent } from './src/services/data/data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HeaderComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
