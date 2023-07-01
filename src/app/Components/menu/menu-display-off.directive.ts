import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuDisplayOff]'
})
export class MenuDisplayOffDirective {

  constructor(private elementRef: ElementRef) {

  }

  @HostListener('click') onClick() {
    this.elementRef.nativeElement.parentElement.style.display = 'none';

  }

}
