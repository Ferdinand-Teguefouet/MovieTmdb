import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/movie/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  foundMovies!: Movie
  img! : string
  url_01: string = "/search/movie?api_key=62f623f39673f5defe37553f5d64bddc&language=fr-FR&query="
  url_02: string = "&page="
  url_03: string = "&include_adult=false"
  count: any = 1
  

  constructor(private readonly _mService: MovieService,
              private readonly _sService: SearchService, 
              private readonly _router: Router,
              /*private readonly _formBuilder: FormBuilder*/) { }

  ngOnInit(): void {
    //let queryControl = this._formBuilder.control("Chercher des films... (liste films d'action par défaut)",  [Validators.required])
    this.img = this._mService.url_img;
    sessionStorage.removeItem('activePage')
    this.loadFoundMovie(this._mService.url_api+"/search/movie?api_key=62f623f39673f5defe37553f5d64bddc&language=fr-FR&query=action&page=1&include_adult=false");
  }

  loadFoundMovie(url: string){
    this._sService.getAll(url).subscribe(
      (foundMovie: Movie) => {
        this.foundMovies = foundMovie
        console.log(this.foundMovies)
      }
    )
  }

  clickPrevious(){
    this.count -= 1
    console.log(this.count)
    let myPage = String(this.count)
    this.loadFoundMovie(this._mService.url_api+this.url_01+myPage+this.url_02);
    

  }

  clickNext(){
    this.count += 1
    console.log(this.count)
    let myPage = String(this.count)
    this.loadFoundMovie(this._mService.url_api+this.url_01+myPage+this.url_02);
    
  }

  onClick(id: number){
    console.log(id)
    this._router.navigate(['movie-detail/'+id])
  }

  savingPageNumberInSStorage(page:number){
    sessionStorage.setItem('activePage', String(page))
  }

  query(){
    
    console.log()
  }
}
