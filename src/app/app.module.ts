import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookComponent } from './src/component/book/book.component';
import { HeaderComponent } from './src/components/header/header.component';
import { HomesComponent } from './src/components/homes/homes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HeaderComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [BookComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
