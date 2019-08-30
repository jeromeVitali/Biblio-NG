import { BooksService } from './../books.service';
import { BookRoutingModule } from './books-rooting.module';
import { BookGenreColorPipe } from './pipe/book-genre-color';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorderCardDirective } from './border-card.directive';

@NgModule({
  imports: [CommonModule, BookRoutingModule],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BorderCardDirective,
    BookGenreColorPipe
  ],
  providers: [BooksService]
})
export class BooksModule {}
