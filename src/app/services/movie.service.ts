import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // Base url TMDB API
  url_api : string = "https://api.themoviedb.org/3"

  // Base url TMDB image
  url_img : string = "https://image.tmdb.org/t/p/w500"

  constructor(private _httpClient: HttpClient) { }

getAll(url : string) : Observable<Movie>{
  return this._httpClient.get<Movie>(url)
}




}
