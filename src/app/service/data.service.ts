/* import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage-service.service';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  existingData: any;
  updatedDataReq: any;

  constructor(private localStorageService: LocalStorageService, private movieService: MovieService) {
    this.existingData = this.localStorageService.getItem('movieData');
    this.updatedDataReq = this.movieService.getMoviesFromApi(localStorage.getItem('token') || '{}');

    if(this.existingData && this.updatedDataReq) {
      const mergedData = { ...this.updatedDataReq, ...this.existingData};
      this.localStorageService.setItem('movieData', mergedData);
    }
  }

  updateData(data: any, id: number) {
    // const movie = this.existingData.filter((data: any) => data.id === id);
    const updatedList = this.existingData.map((item: any) => item.id === data.id ? data : item);
    this.localStorageService.setItem('movieData', updatedList);
  }
}
 */