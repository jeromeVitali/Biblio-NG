import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// ElementRed: element du DOM sur lequel on applique la directive

@Directive({
  selector: '[appBookBorderCard]'
})
export class BorderCardDirective {
  private initialColor = '#f5f5f5';
  private selectColor = '#009000';
  private defaultHeight = 245;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('appBookBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.selectColor);
  }
  // hostlistener gere les interactions de l'utilisateur au sein de la directive
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
    const border = 'solid 3px' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
}
