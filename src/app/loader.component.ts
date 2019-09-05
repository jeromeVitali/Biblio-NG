import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-loader',
  template: `
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  `
})
export class LoaderComponent {}
