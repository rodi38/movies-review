import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuDisplayOn]'
})
export class MenuDisplayOnDirective {
  // isOpen: boolean = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClick() {
    // if(!this.isOpen) {
    //   this.isOpen = true;
    //   this.elementRef.nativeElement.parentElement.style.display= 'none';
    //   console.log("false")
    // } else {
    //   this.isOpen = false;
    //   console.log("true")

    // }
    this.elementRef.nativeElement.parentElement.querySelector('nav').style.display = '';

  }
}
