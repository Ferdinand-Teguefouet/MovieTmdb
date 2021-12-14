import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies! : Movie
  img! : string

  constructor(private readonly _mService: MovieService,) { }

  ngOnInit(): void {
    this.img = this._mService.url_img;
    this.loadMovie(this._mService.url_api);
  }

  loadMovie(url: string){
    this._mService.getAll(url).subscribe(
      (movieFromService: Movie) => {
        this.movies = movieFromService
        console.log(this.movies)
      }
    )
  }
}
