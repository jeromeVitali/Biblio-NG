import { BooksService } from './../../books.service';
import { Book } from './../model/bookModels';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Input() book: Book; // propriété d'entrée du composant
  genres: Array<string>; // genres disponibles pour un livre
  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit() {
    // Initialisation de la propriété genres
    this.genres = this.booksService.getBookGenres();
  }

  // Détermine si le genre passé en paramètres appartient ou non au livre en cours d'édition.
  hasGenre(genre: string): boolean {
    const index = this.book.genres.indexOf(genre);
    if (index > -1) {
      return true;
    }
    return false;
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire genre au livre en cours d'édition.
  selectGenre($event: any, genre: string): void {
    const checked = $event.target.checked;
    if (checked) {
      this.book.genres.push(genre);
    } else {
      const index = this.book.genres.indexOf(genre);
      if (index > -1) {
        this.book.genres.splice(index, 1);
      }
    }
  }

  // Valide le nombre de genre pour chaque livre
  isGenresValid(genre: string): boolean {
    if (this.book.genres.length === 1 && this.hasGenre(genre)) {
      return false;
    }
    if (this.book.genres.length >= 3 && !this.hasGenre(genre)) {
      return false;
    }
    return true;
  }

  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
    console.log('Submit form !');
    const link = ['/book', this.book.id];
    this.router.navigate(link);
  }
}
