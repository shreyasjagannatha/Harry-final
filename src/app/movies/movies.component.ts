import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MoviesService}  from '../services/movies.service';
import {Movies}  from  '../models/movies';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import {CustomcurrencyPipe}  from '../customcurrency.pipe';
import {TimeminutePipe}  from '../timeminute.pipe';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule,CommonModule,CustomcurrencyPipe,TimeminutePipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit,AfterViewInit {
  title:string='';
  year:string='';
  loaddetails: boolean = true;
  constructor(private moviesservice:MoviesService,private router: Router){
  }
  ngAfterViewInit(): void {
    this.loaddetails = true;
    this.moviesservice.getData().subscribe(
      (response) => {
        this.movies = response;
        this.filteredMovies= response;
        this.loaddetails = false;
       // console.log(this.movies);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  movies!:Movies[];
  movie!:Movies;
  filteredMovies: Movies[] = [];
  ngOnInit(): void {
   
  }
  viewDetails(movie:Movies){
    this.router.navigate(['/movie', movie.id]);

  }
  dataChanged(event:string){
    const filtertitle = this.title?.toLowerCase();
    const filteryear = this.year?.toLowerCase();
   // console.log(filtertitle);
   // console.log(filteryear);
    this.filteredMovies=this.movies.filter(movie =>
      movie.title.toLowerCase().includes(filtertitle) &&
      movie.release_date.toLowerCase().includes(filteryear)
    );
   
    
  }

}
