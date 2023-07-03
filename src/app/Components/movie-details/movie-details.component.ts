import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movie: any;
  constructor(private userData: UserService, private movieService: MovieService){}
  ngOnInit(): void {

    // this.movie = this.movieService.getMovieById(JSON.parse(localStorage.getItem('movieData') || '{}'), this.userData.getUserId())
  }
}
