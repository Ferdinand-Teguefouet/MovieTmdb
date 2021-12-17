import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SearchMovieComponent
  ]
  
})
export class SearchModule { }
