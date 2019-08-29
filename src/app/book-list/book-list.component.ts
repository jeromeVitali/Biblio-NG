import { Router } from '@angular/router';
import { BOOKS } from './../mock/booksMock';
import { Book } from './../model/bookModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-list', // donne un nom au compo => dans html <app-root></app-root>
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  // logique du compo

  public books: Book[] = null;
  public title = 'Biblio-NG';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.books = BOOKS;
  }

  selectBook(book: Book) {
    console.log('vous avez clic sur' + book.title);
    let link = ['/book', book.id];
    this.router.navigate(link);
  }
}
