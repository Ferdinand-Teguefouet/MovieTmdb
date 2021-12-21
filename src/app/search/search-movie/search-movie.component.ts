import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
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
  //queryForm!: FormGroup
  queryForm = new FormGroup({
    query: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]),
  })

  get query(){
    return this.queryForm.get('query');
  }

  constructor(private readonly _mService: MovieService,
              private readonly _sService: SearchService, 
              private readonly _router: Router) { }

  ngOnInit(): void {
    //let queryControl = this._formBuilder.control("Chercher des films... (liste films d'action par défaut)",  [Validators.required])
  
    sessionStorage.removeItem('activePage');
    this.img = this._mService.url_img;
    if(sessionStorage.getItem('activePageOfSearch') == null && sessionStorage.getItem('myQuery') == null){
      sessionStorage.setItem('myQuery', "action");
      sessionStorage.setItem('activePageOfSearch', "1");
      this.loadFoundMovie(this._mService.url_api+"/search/movie?api_key=62f623f39673f5defe37553f5d64bddc&language=fr-FR&query=action&page=1&include_adult=false");
    }else{
      this.loadFoundMovie(this._mService.url_api+this.url_01+sessionStorage.getItem('myQuery')+this.url_02+sessionStorage.getItem('activePageOfSearch')+this.url_03);
    }
    
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
    let myQuery = sessionStorage.getItem("myQuery")
    this.loadFoundMovie(this._mService.url_api+this.url_01+myQuery+this.url_02+myPage+this.url_03);
    

  }

  clickNext(){
    this.count += 1
    console.log(this.count)
    let myQuery = sessionStorage.getItem("myQuery")
    let myPage = String(this.count)
    this.loadFoundMovie(this._mService.url_api+this.url_01+myQuery+this.url_02+myPage+this.url_03);
    
  }

  onClick(id: number){
    console.log(id)
    this._router.navigate(['movie-detail/'+id])
  }

  savingPageNumberInSStorage(page:number){
    sessionStorage.setItem('activePageOfSearch', String(page));    
  }

  onSubmit() {
    console.log(this.queryForm.value)
    this.count = 1
    //sessionStorage.setItem('activePageOfSearch', String(this.count));
    sessionStorage.setItem('myQuery', String((this.queryForm.value).query));
    let myQuery = String((this.queryForm.value).query)
    let myPage = String(this.count)
    //console.warn(myPage)
    //console.warn(this._mService.url_api+this.url_01+myQuery+this.url_02+myPage+this.url_03)
    this.loadFoundMovie(this._mService.url_api+this.url_01+myQuery+this.url_02+myPage+this.url_03);  
  }
}
