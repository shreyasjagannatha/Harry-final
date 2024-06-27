import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Movies}  from  '../models/movies';
import {MovieDetails}  from  '../models/moviedetails';
import { delay, retryWhen,retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies!:Movies[];
  movie!:MovieDetails;
  private apiUrl = 'https://api/movies'; // Replace with your API URL
  
  constructor(private http: HttpClient) { }
  getData(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.apiUrl).pipe(
      retryWhen(errors =>
        errors.pipe(
          delay(1000), // Delay of 1 second before retrying
          retry(1) // Retry the request once
        )
      ),
      catchError(this.handleError)
    );
   
   
  }
  getmovedetail(id:string): Observable<MovieDetails> {
    const apimoviedetail = 'https://api/movies/'+id;
    return this.http.get<MovieDetails>(apimoviedetail).pipe(
      retryWhen(errors =>
        errors.pipe(
          delay(1000), // Delay of 1 second before retrying
          retry(1) // Retry the request once
        )
      ),
      catchError(this.handleError)
    );
   
  }

 
  private handleError(error: HttpErrorResponse) {
    // Handle the error here
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
