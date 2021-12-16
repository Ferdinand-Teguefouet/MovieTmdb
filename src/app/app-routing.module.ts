import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';

const routes: Routes = [
  {path: "", redirectTo: "/movie-list", pathMatch: 'full'},
  {path: "movie-list", component : MovieListComponent},
  {path: "movie-detail/:id", component : MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
