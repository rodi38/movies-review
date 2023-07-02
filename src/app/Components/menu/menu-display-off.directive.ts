import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
   selector: "[appMenuDisplayOff]",
})
export class MenuDisplayOffDirective {
   constructor(private elementRef: ElementRef) {}

   @HostListener("click") onClick() {
      const navigationElement = this.elementRef.nativeElement.parentElement;
      navigationElement.style.height = "0";
      navigationElement.style.opacity = "0";
      navigationElement.style.visibility = "hidden";

      console.log(navigationElement);
   }
}
