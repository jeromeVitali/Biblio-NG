import { BooksService } from './../../books.service';
import { Book } from './../model/bookModels';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-edit',
  templateUrl: './book-edit.component.html'
})
export class BookEditComponent implements OnInit {
  book: Book = null;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.book = this.booksService.getBook(id);
  }
}
