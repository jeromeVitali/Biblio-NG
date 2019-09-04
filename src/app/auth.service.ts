import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn = false; // L'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?

  // méthode de connexion
  login(name: string, password: string): Observable<boolean> {
    // appel à un service d'authentification...
    const isLoggedIn = (name === 'admin' && password === 'admin');

    return of(true).pipe(
      delay(1000),
      tap(val => (this.isLoggedIn = isLoggedIn))
    );
  }

  // Une méthode de déconnexion
  logout(): void {
    this.isLoggedIn = false;
  }
}
