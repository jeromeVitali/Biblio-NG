import { Pipe, PipeTransform } from '@angular/core';

/* Affiche la couleur correspondant au genre du livre.
 * Prend en argument le genre du livre.
 * Exemple d'utilisation:
 *   {{ book.genre | bookGenreColor }}
 */

@Pipe({ name: 'bookGenreColor' })
export class BookGenreColorPipe implements PipeTransform {
  transform(genre: string): string {
    let color: string;

    switch (genre) {
      case 'Cuisine':
        color = 'red lighten-3';
        break;
      case 'Science-fiction':
        color = 'green lighten-3';
        break;
      case 'Bande-dessinée':
        color = 'yellow lighten-3';
        break;
      case 'Policier':
        color = 'grey lighten-3';
        break;
      case 'Théatre':
        color = 'brown lighten-3';
        break;
      case 'Aventure':
        color = 'deep-purple lighten-3';
        break;
      default:
        color = 'red';
        break;
    }

    return 'chip ' + color;
  }
}
