import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
   selector: "app-movie-catalog",
   templateUrl: "./movie-catalog.component.html",
   styleUrls: ["./movie-catalog.component.css"],
})
export class MovieCatalogComponent implements OnInit {
   movies: any;
   
   constructor() {}
   ngOnInit() {
    this.movies = JSON.parse(localStorage.getItem('movieData') || '{}');
      if (localStorage.getItem("token")) {
         console.log(this.movies);
      } else{
        console.log("oxe")
      }
   }
}
