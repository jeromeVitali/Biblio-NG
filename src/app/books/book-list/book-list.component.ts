import { BooksService } from './../../books.service';
import { Router } from '@angular/router';
// import { BOOKS } from '../mock/booksMock';
import { Book } from '../model/bookModels';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-list', // donne un nom au compo => dans html <app-root></app-root>
  templateUrl: './book-list.component.html'
  // providers: [BooksService]
})
export class BookListComponent implements OnInit {
  // logique du compo

  public books: Book[] = null;
  public title = 'Biblio-NG';

  constructor(private router: Router, private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books => (this.books = books));
  }

  selectBook(book: Book): void {
    console.log('vous avez clic sur' + book.title);
    const link = ['/book', book.id];
    this.router.navigate(link);
  }
}
