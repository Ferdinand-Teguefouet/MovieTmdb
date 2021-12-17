import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetail } from '../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  oneMovie!: MovieDetail
  img! : string
  id! : number

  constructor(private readonly _router: Router,
              private readonly _mService: MovieService,
              private readonly _activetedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.img = this._mService.url_img
    this.id = this._activetedroute.snapshot.params.id
    //console.log(this.id)

    this.getOneMovie(this._mService.url_api+"/movie/"+String(this.id)+"?api_key=62f623f39673f5defe37553f5d64bddc&language=fr-FR")
  }

  getOneMovie(url: string){
    this._mService.GetById(url).subscribe(
      (OneMovieFormService: MovieDetail) => {
      this.oneMovie = OneMovieFormService
      console.log(this.oneMovie)
      })
  }

  
}
