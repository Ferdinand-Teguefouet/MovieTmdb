import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../movie/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private readonly _httpClient: HttpClient) { }

  getAll(url : string) : Observable<Movie>{
    return this._httpClient.get<Movie>(url)
  }
}
