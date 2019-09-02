import { Book } from './../model/bookModels';
import { BooksService } from 'src/app/books.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-search',
  templateUrl: './book-search.component.html'
})
export class BookSearchComponent implements OnInit {
  private searchTerms = new Subject<string>(); // Subject permet de stocker les recherches succesives sous forme d'observable
  books$: Observable<Book[]>;
  // $ à la fin indique qu'il s'agit d'un observable/flux

  constructor(private booksService: BooksService, private router: Router) {}

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.books$ = this.searchTerms.pipe(
      // attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // on retourne la liste des résultats correpsondant aux termes de la recherche
      switchMap((term: string) => this.booksService.searchBooks(term))
    );
  }

  gotoDetail(book: Book): void {
    const link = ['/book', book.id];
    this.router.navigate(link);
  }
}
