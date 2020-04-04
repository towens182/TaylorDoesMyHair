import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { About } from '../models/about';

@Injectable({ providedIn: 'root' })
export class AboutService {

  private url = "http://localhost:8080/about";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient ) { }

  getAbout(): Observable<About> {
    return this.http.get<About>(this.url)
      .pipe(
        tap(_ => this.log('Calling About Service.')),
          catchError(this.handleError<About>('getAbout'))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    private log(message: string) {
      // TODO: not implemented yet
    }
}
