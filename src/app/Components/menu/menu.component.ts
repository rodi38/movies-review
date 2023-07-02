import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
   selector: "app-menu",
   templateUrl: "./menu.component.html",
   styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
   constructor(public userService: UserService) {

   }
   @Output() toggleWidth = new EventEmitter<void>();
   
   toggleHeaderWidth() {
    this.toggleWidth.emit();
   }

   ngOnInit(): void {
    this.userService.isLogged = localStorage.getItem('isAuthenticated') === 'true';
   }

   logout(): void {
    localStorage.clear();
    this.userService.isLogged = false;
   }


}
