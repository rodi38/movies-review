import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
   selector: "app-movie-catalog",
   templateUrl: "./movie-catalog.component.html",
   styleUrls: ["./movie-catalog.component.css"],
})
export class MovieCatalogComponent implements OnInit {
   movies: any;

   constructor(public userData: UserService) {}
   ngOnInit() {
      if (localStorage.getItem("token")) {
         this.movies = this.userData.movieList;
         console.log(this.movies);
         console.log(this.userData.movieList);
      } else{
        console.log("oxe")
      }
   }
}
