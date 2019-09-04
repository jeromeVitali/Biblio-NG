import { AuthGuard } from './../auth-guard.service';
import { LoaderComponent } from './../loader.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksService } from './../books.service';
import { BookRoutingModule } from './books-rooting.module';
import { BookGenreColorPipe } from './pipe/book-genre-color';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { FormsModule } from '@angular/forms';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
  imports: [CommonModule, FormsModule, BookRoutingModule],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BorderCardDirective,
    BookGenreColorPipe,
    BookFormComponent,
    BookEditComponent,
    BookSearchComponent,
    LoaderComponent
  ],
  providers: [BooksService, AuthGuard]
})
export class BooksModule {}
