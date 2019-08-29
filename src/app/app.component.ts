import { BOOKS } from './mock/booksMock';
import { Component, OnInit } from '@angular/core';
import { Book } from './model/bookModels';

@Component({
  selector: 'app-root', // donne un nom au compo => dans html <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // logique du compo

  public books: Book[] = null;
  public title = 'Biblio-NG';

  ngOnInit(): void {
    this.books = BOOKS;
  }

  selectBook(book: Book) {
    alert('vous avez clic sur' + book.title);
  }
}
