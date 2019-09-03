import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// les routes du module book
const booksRoutes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'book/edit/:id', component: BookEditComponent },
  { path: 'book/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(booksRoutes)], // permet d'enregistrer des routes additionnelle au module racine
  exports: [RouterModule]
})
export class BookRoutingModule {}
