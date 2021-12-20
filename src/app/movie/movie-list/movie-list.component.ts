import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  url_movie: string = "/discover/movie?api_key=62f623f39673f5defe37553f5d64bddc&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page="
  url_end: string = "&with_watch_monetization_types=free"
  count : number = 1

  constructor(private readonly _mService: MovieService, 
              private readonly _router: Router){ }

  ngOnInit(): void {
    this.img = this._mService.url_img;
    sessionStorage.removeItem('activePageOfSearch');
    sessionStorage.removeItem('myQuery');
    if(sessionStorage.getItem('activePage') == null){
      this.loadMovie(this._mService.url_api+"/discover/movie?api_key=62f623f39673f5defe37553f5d64bddc&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free");
    }else{
      this.loadMovie(this._mService.url_api+"/discover/movie?api_key=62f623f39673f5defe37553f5d64bddc&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page="+sessionStorage.getItem('activePage')+"&with_watch_monetization_types=free");
    }
    
  }

  loadMovie(url: string){
    this._mService.getAll(url).subscribe(
      (movieFromService: Movie) => {
        this.movies = movieFromService
        console.log(this.movies)
      }
    )
  }

  clickPrevious(){
    this.count -= 1
    console.log(this.count)
    let myPage = String(this.count)
    this.loadMovie(this._mService.url_api+this.url_movie+myPage+this.url_end);
    

  }

  clickNext(){
    this.count += 1
    console.log(this.count)
    let myPage = String(this.count)
    this.loadMovie(this._mService.url_api+this.url_movie+myPage+this.url_end);
    
  }

  onClick(id: number){
    console.log(id)
    this._router.navigate(['movie-detail/'+id])
  }

  savingPageNumberInSStorage(page:number){
    sessionStorage.setItem('activePage', String(page))
  }
}
