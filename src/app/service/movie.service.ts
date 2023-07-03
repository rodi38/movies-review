import { Injectable } from '@angular/core';

type Movie =  {
  id: number,
  user_id: number,
  title: string,
  synopsis: string,
  date: string,
  genre: string,
  poster: string,
  watched: boolean
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor() {

  }

  getMovieById(movieData: Movie[],id: number) {
    return movieData.filter((movie) => movie.id === id);
  }

}
