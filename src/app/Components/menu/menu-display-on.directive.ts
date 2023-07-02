import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
   selector: "[appMenuDisplayOn]",
})
export class MenuDisplayOnDirective {
   // isOpen: boolean = false;

   constructor(private elementRef: ElementRef) {}

   @HostListener("click") onClick() {
      // const navigationElement = this.elementRef.nativeElement.parentElement.querySelector('nav');
      const navigationElement = this.elementRef.nativeElement.parentElement.querySelector("#navigation");
      console.log(navigationElement);
      // this.elementRef.nativeElement.parentElement.querySelector('#navigation').navigationElement.style.height = 'auto'
      // this.elementRef.nativeElement.parentElement.querySelector('#navigation').navigationElement.style.opacity = '1'
      // this.elementRef.nativeElement.parentElement.querySelector('nav').style.opacity = '1';
      navigationElement.style.height = "100vh";
      navigationElement.style.visibility = "visible";
      navigationElement.style.opacity = "1";
      // navigationElement.style.display = '';
   }
}
