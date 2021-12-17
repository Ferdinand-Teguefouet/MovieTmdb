import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { SearchMovieComponent } from './search/search-movie/search-movie.component';

const routes: Routes = [
  {path: "", redirectTo: "/movie-list", pathMatch: 'full'},
  {path: "movie-list", component : MovieListComponent},
  {path: "movie-detail/:id", component : MovieDetailComponent},
  {path: "search-movie", component: SearchMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
