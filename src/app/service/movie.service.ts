import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs";

interface Movie {
   id: number;
   user_id: number;
   title: string;
   synopsis: string;
   date: string;
   genre: string;
   poster: string;
   watched: boolean;
}
//classe para teste
@Injectable({
   providedIn: "root",
})
export class MovieService {


   API_URL = "https://filmsreviewer-api.onrender.com/";
   movies: any;
   constructor(private http: HttpClient) {
      this.movies = JSON.parse(localStorage.getItem("movieData") || "{}");
   }
   // getMovieId(movieList: [{}]): number {
   //   movieList.map((movie) => {
   //     return
   //   } )
   // }

   getMovieById(movieData: Movie[], id: number) {
      return movieData.filter((movie) => movie.id === id);
   }

   getMoviesFromApi(token: string): any {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      return this.http.get(this.API_URL + "movies", config).pipe(take(1)).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error)
        },
        complete: () =>{
          console.log('sucesso meu chapa');
        }
      });
   }


}
