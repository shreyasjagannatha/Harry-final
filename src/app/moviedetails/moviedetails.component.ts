import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MoviesService}  from '../services/movies.service';
import {MovieDetails}  from  '../models/moviedetails';
import {CustomcurrencyPipe}  from '../customcurrency.pipe';
import {TimeminutePipe}  from '../timeminute.pipe';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [CustomcurrencyPipe,TimeminutePipe,CommonModule],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit,AfterViewInit {
  movieId: string='';
  movie!:MovieDetails;

  loaddetails: boolean = true;
  constructor(private route: ActivatedRoute,private moviesservice:MoviesService,private router: Router) { }
  ngAfterViewInit(): void {
    this.loaddetails = true;
 
    this.route.params.subscribe(params => {
      this.movieId = params['id']; 
     // console.log('Movie ID:', this.movieId);
      this.moviesservice.getmovedetail(this.movieId).subscribe(
        (response) => {
          this.movie = response;
          this.loaddetails = false;
          
         

      
      


          
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
  ngOnInit(): void {
    
  }
  gotomovies(){
    this.router.navigate(['/movies']);

  }
}
