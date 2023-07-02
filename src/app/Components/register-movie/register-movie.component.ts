import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";

@Component({
   selector: "app-register-movie",
   templateUrl: "./register-movie.component.html",
   styleUrls: ["./register-movie.component.css"],
})
export class RegisterMovieComponent implements OnInit {
   token: string | null = localStorage.getItem("token");

   movieData = new FormGroup({
      title: new FormControl(""),
      synopsis: new FormControl(""),
      date: new FormControl(""),
      genre: new FormControl(""),
      poster: new FormControl(""),
   });
   constructor(private user: UserService, private router: Router) {}

   ngOnInit() {}

   onMovieSubmit(data: {}) {
      this.user.registerMovie(data, this.token).subscribe({
         next: (res) => {
          console.log(res);
          console.log('cadastrado com sucesso.')
          localStorage.setItem('movieList', JSON.stringify(this.movieData.value))
          console.log(localStorage.getItem('movieList'));
          this.router.navigateByUrl('/dashboard');
         },
         error: (error) => {
            console.log(error);
         },
         complete: () => console.info("complete"),
      });
   }
}
