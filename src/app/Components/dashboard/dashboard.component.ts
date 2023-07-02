import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  token: string | null = localStorage.getItem('token');
  movies: any;
  constructor(private user: UserService, private router: Router){ }

  ngOnInit(): void {
    if(this.token){
      this.getUserMovies();
    } else{
      this.router.navigateByUrl('/login');
    }
  }

  getUserMovies() {
    if(this.token !== null) {
      this.user.getUserMovies(this.token).subscribe({
        next: (res) => {
          this.movies = res;
          console.log(res);
          console.log(this.movies);
        },
        error: (error) => console.log(error),
        complete: () => console.info('complete')
      })
    }
  }

}
