import { InMemoryDataService } from './in-memory-data.service';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './books/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    HttpClientModule,
    BooksModule,
    AppRoutingModule
  ], // attention à l'ordre !! (ordre de chargement/declaration)
  providers: [], // remplir le nom de service ici pour quil soit dispo partout dans l'appli
  bootstrap: [AppComponent]
})
export class AppModule {}
