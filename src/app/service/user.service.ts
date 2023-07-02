import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs";

@Injectable({
   providedIn: "root",
})
export class UserService {
   apiUrl = "https://filmsreviewer-api.onrender.com/"; // Substitua pela URL da API desejada
   isLogged?: boolean;

   constructor(private http: HttpClient) {}

   createUser(data: any) {
      return this.http.post(this.apiUrl + "signup", data).pipe(take(1));
   }

   login(data: {}) {
      return this.http.post(this.apiUrl + "login", data).pipe(take(1));
   }
   getUserMovies(token: string) {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      return this.http.get(this.apiUrl + "movies", config);
   }

   registerMovie(data: {}, token: string | null) {
    const config = {headers: {Authorization: `Bearer ${token}`}}
    return this.http.post(this.apiUrl + "movies", data, config);
   }
}
