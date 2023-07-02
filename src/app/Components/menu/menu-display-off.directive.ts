import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
   selector: "[appMenuDisplayOff]",
})
export class MenuDisplayOffDirective {
   constructor(private elementRef: ElementRef) {}

   @HostListener("click") onClick() {
      // // this.elementRef.nativeElement.parentElement.style.opacity = '0';
      // this.elementRef.nativeElement.parentElement.style.display = 'none';
      const navigationElement = this.elementRef.nativeElement.parentElement;
      // navigationElement.style.height = "0";
      navigationElement.style.height = "0";
      navigationElement.style.visibility = 'hidden';
      navigationElement.style.opacity = "0";
      // navigationElement.style.display = 'none';

      console.log(navigationElement)
   }
}
