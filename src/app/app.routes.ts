import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
export const routes: Routes = [
    {path: "movies", component: MoviesComponent},
    { path: 'movie/:id', component: MoviedetailsComponent },
    {path: "**", redirectTo:"movies"}
];