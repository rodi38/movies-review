import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";

@Component({
   selector: "app-dashboard",
   templateUrl: "./dashboard.component.html",
   styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
   token: string | null = localStorage.getItem("token");
   movies: any;
   userData: any;
   constructor(public user: UserService, private router: Router) {}

   ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
      if (this.token) {
         this.getUserMovies();
      } else {
         this.router.navigateByUrl("/login");
      }
   }

   onLogout() {
    localStorage.clear();
    window.alert("Deslogado com sucesso!");
    this.user.isLogged = false;

   }
   getUserMovies() {
      if (this.token !== null) {
         this.user.getUserMovies(this.token).subscribe({
            next: (res) => {
               this.user.movieList = this.movies;
               this.movies = res;
               localStorage.setItem('movieData', JSON.stringify(res));
            },
            error: (error) => console.log(error),
            complete: () => console.info("complete"),
         });
      }
   }
}
