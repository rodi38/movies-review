import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieService } from "src/app/service/movie.service";
import { UserService } from "src/app/service/user.service";
import { take } from "rxjs";


@Component({
   selector: "app-dashboard",
   templateUrl: "./dashboard.component.html",
   styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
   token: string | null = localStorage.getItem("token");
   movies: any;
   userData: any;
   constructor(public user: UserService,public movie: MovieService, private router: Router) {}

   onClickT(id: number){
      if(this.token !== null){
         const movie = this.movie.getMovieById(id, this.token);
         localStorage.setItem('selectedMovie', JSON.stringify(movie));
      }
   }

   ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
      /* if (this.token) {
         this.getMovies();
      } else {
         this.router.navigateByUrl("/login");
      } */
   }

   onLogout() {
    localStorage.clear();
    window.alert("Deslogado com sucesso!");
    this.user.isLogged = false;

   }
   /* getMovies() {
      this.movie.getMoviesFromApi().subscribe({
         next: (res:Response) => {
            this.user.movieList = this.movies;
            this.movies = res;
            localStorage.setItem('movieData', JSON.stringify(res));
         },
         error: (error:Error) => console.log(error),
         complete: () => console.info("complete"),
      });
   } */
}
