import { BOOKS } from './books/mock/booksMock';
import { Book } from './books/model/bookModels';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  // Retourne tous les livres
  getBooks(): Book[] {
    return BOOKS;
  }

  // Retourne le livre avec l'identifiant passé en paramètre
  getBook(id: number): Book {
    const books = this.getBooks();

    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < books.length; index++) {
      // CHANGER POUR UN FOREACH !!
      if (id === books[index].id) {
        return books[index];
      }
    }
  }

  getBookGenres(): string[] {
    return [
      'Aventure',
      'Cuisine',
      'Science-fiction',
      'Bande-dessinée',
      'Policier',
      'Théatre'
    ];
  }
}
