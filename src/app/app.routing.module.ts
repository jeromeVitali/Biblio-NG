import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
const appRoutes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
