import { AuthGuard } from './../auth-guard.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// les routes du module book
const booksRoutes: Routes = [
  {
    path: 'book',
    canActivate: [AuthGuard],
    children: [
      { path: 'all', component: BookListComponent },
      {
        path: 'edit/:id',
        component: BookEditComponent,
        canActivate: [AuthGuard]
      },
      { path: ':id', component: BookDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(booksRoutes)], // permet d'enregistrer des routes additionnelle au module racine
  exports: [RouterModule]
})
export class BookRoutingModule {}
