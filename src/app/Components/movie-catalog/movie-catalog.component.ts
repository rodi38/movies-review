import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MovieService } from "src/app/service/movie.service";
import { UserService } from "src/app/service/user.service";

@Component({
   selector: "app-movie-catalog",
   templateUrl: "./movie-catalog.component.html",
   styleUrls: ["./movie-catalog.component.css"],
})
export class MovieCatalogComponent implements OnInit {
   movies: any;
   
   constructor(public movie: MovieService) {}
   ngOnInit() {
      this.getMovies()
      this.movies = JSON.parse(localStorage.getItem('movieData') || '{}');
   
   }

   getMovies() {
      this.movie.getMoviesFromApi().subscribe({
         next: (res:Response) => {
            this.movies = res;
            localStorage.setItem('movieData', JSON.stringify(res));
         },
         error: (error:Error) => console.log(error),
         complete: () => console.info("complete"),
      });
   }
}
