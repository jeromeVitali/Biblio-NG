// import { BOOKS } from '../mock/booksMock';
import { Book } from '../model/bookModels';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/books.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-detail',
  templateUrl: './book-detail.component.html'
  // providers: [BooksService]
})
export class BookDetailComponent implements OnInit {
  books: Book[] = null;
  book: Book = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    // this.books = BOOKS;
    this.books = this.booksService.getBooks();

    const id = +this.route.snapshot.paramMap.get('id'); // on recup l'id du livre contenu dans l'url (snapshot=synchrone)
    // for (let i = 0; i < this.books.length; i++) {
    //   // VOIR POUR UN FOREACH!!
    //   if (this.books[i].id === id) {
    //     this.book = this.books[i];
    this.book = this.booksService.getBook(id);
  }

  goEdit(book: Book): void {
    const link = ['book/edit', book.id];
    this.router.navigate(link);
  }

  goBack(): void {
    this.router.navigate(['./books']);
    // window.history.back()
  }
}
