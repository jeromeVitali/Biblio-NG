import { BOOKS } from './../mock/booksMock';
import { Book } from './../model/bookModels';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  books: Book[] = null;
  book: Book = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.books = BOOKS;

    let id = +this.route.snapshot.paramMap.get('id'); // on recup l'id du livre contenu dans l'url (snapshot=synchrone)
    for (let i = 0; i < this.books.length; i++) {
      // VOIR POUR UN FOREACH!!
      if (this.books[i].id === id) {
        this.book = this.books[i];
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/books']);

    // window.history.back()
  }
}
