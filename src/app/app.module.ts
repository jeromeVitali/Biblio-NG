import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './books/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule], // attention à l'ordre !! (ordre de chargement/declaration)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
