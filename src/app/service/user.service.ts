import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs";

@Injectable({
   providedIn: "root",
})
export class UserService implements OnInit {
   apiUrl = "https://filmsreviewer-api.onrender.com/";
   isLogged?: boolean;
   movieList: any;
   userData: {} = {};
   userId?: number;

   constructor(private http: HttpClient) {}


   ngOnInit(): void {
   }

   get getUserData(): {} {
      return this.userData;
   }
   set setUserData(userData: {}) {
      this.userData = userData;
   }

   get getUserId(): number | undefined{
      return this.userId;
   }
   set setUserId(userId: number) {
      this.userId = userId;
   }


   createUser(data: any) {
      return this.http.post(this.apiUrl + "signup", data).pipe(take(1));
   }

   login(data: {}) {
      return this.http.post(this.apiUrl + "login", data).pipe(take(1));
   }
   /* getUserMovies(token: string) {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      return this.http.get(this.apiUrl + "movies", config);
   } */

   registerMovie(data: {}, token: string | null) {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      return this.http.post(this.apiUrl + "movies", data, config).pipe(take(1));
   }
}
