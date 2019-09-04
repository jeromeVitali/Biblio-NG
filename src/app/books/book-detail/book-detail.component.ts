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
    const id = +this.route.snapshot.params.id;
    this.booksService.getBook(id).subscribe(book => (this.book = book));
  }

  goEdit(book: Book): void {
    const link = ['book/edit', book.id];
    this.router.navigate(link);
  }

  delete(book: Book): void {
    this.booksService.deleteBook(book).subscribe(_ => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['./book/all']);
    // window.history.back()
  }
}
