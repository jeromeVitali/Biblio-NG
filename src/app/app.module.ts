import { BookGenreColorPipe } from './pipe/book-genre-color';
import { BorderCardDirective } from './border-card.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, BorderCardDirective, BookGenreColorPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
