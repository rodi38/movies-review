import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/service/movie.service";
import { UserService } from "src/app/service/user.service";

@Component({
   selector: "app-register-movie",
   templateUrl: "./register-movie.component.html",
   styleUrls: ["./register-movie.component.css"],
})
export class RegisterMovieComponent implements OnInit{
   isTrue: boolean = true;
   responseData: any;

   constructor(private user: UserService) {}


   ngOnInit() {
    // const body = {
    //   username: "rodi38",
    //   email:"rodriguin@email.com",
    //   password:"123456"
    // }
    //   this.user.createUser(body);
    //   // .subscribe(
      //   success => console.log('success'),
      //   error => console.log(error),
      //   () => console.log('request ok')
      //   // (response) =>{
      //   // this.responseData = response;
      //   // console.log(this.responseData);
      // // }
      // );
   }
}
