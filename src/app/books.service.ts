import { BOOKS } from './books/mock/booksMock';
import { Book } from './books/model/bookModels';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  private booksUrl = 'api/books'; // point d'acces de l'api

  // Retourne tous les livres
  getBooks(): Observable<Book[]> {
    // retourne un observable qui contient un tableau (pas un json car on utilise le httpclient, au pire on peut le convertir)
    return this.http.get<Book[]>(this.booksUrl).pipe(
      tap(_ => this.log(`fetched books`)),
      catchError(this.handleError('getBooks', []))
    );
  }

  // Retourne le livre avec l'identifiant passé en paramètre
  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;

    return this.http.get<Book>(url).pipe(
      tap(_ => this.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  // Persiste les modifs de livre via l'api
  updateBook(book: Book): Observable<Book> {
    const HttpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.booksUrl, book, HttpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.id}`)),
      catchError(this.handleError<any>(`updatePokemon`))
    );
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

  private handleError<T>(operation = 'operation', result?: T) {
    // T designe le fait de "typer un type en lui même"
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`); // 'operation' est le nom de la methode qui a causé l'erreur
      return of(result as T); // 'result' donnée facultative à renvoyer comme resultat
      // return permet à l'appli de continuer a fonctionner en renvoyant un resultat "adapté" à la methode qui fait chier
      // of permet de transformer les données passé parametre en un observable => evite interomptre le deroulement des processus
    };
  }

  // on centralise les logs de l'appli
  private log(log: string) {
    console.log(log);
  }
}
