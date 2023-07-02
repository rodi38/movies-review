import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://filmsreviewer-api.onrender.com/movies'; // Substitua pela URL da API desejada

  constructor(private http: HttpClient) { }

  fazerRequisicao(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
