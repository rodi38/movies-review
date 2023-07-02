import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { UserService } from "src/app/service/user.service";
import { Router } from '@angular/router';

@Component({
   selector: "app-user-login",
   templateUrl: "./user-login.component.html",
   styleUrls: ["./user-login.component.css"],
})
export class UserLoginComponent implements OnInit {
   userData: any;
   constructor(private user: UserService, private router: Router) {}

   userForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
   });

   ngOnInit(): void {}

   onLogin(data: {}) {
      this.user.login(data).subscribe({
         next: (res) => {
            this.userData = res;
            console.log(res);
            console.log(this.userData);
            localStorage.setItem("token", this.userData.token);
            console.log(localStorage.getItem("token"));
            localStorage.setItem("isAuthenticated", 'true');
            this.user.isLogged = localStorage.getItem('isAuthenticated') ===  'true';
            this.router.navigateByUrl('/dashboard');
         },
         error: (error) => {
          localStorage.setItem("isAuthenticated", 'false');
          this.user.isLogged = localStorage.getItem('isAuthenticated') ===  'true';
          console.log(error);
          window.alert("testou pq quis");
        },
         complete: () => console.info("complete"),
      });
   }
}
