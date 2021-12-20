import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SearchMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SearchMovieComponent
  ]
  
})
export class SearchModule { }
