import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-404',
  template: `
    <div class="center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6P_UKEGpg3VuBGvJb1XQ8juGwlT4X7YwEyn-4pcGGmI3nhDIpIA"
      />
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/book/all" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent {}
