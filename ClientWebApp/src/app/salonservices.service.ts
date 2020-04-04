import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SalonOffering } from 'src/models/salonOffering';

@Injectable({
  providedIn: 'root'
})
export class SalonservicesService {

  private url = "http://localhost:8080/services";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getServices(): Observable<SalonOffering> {
    return this.http.get<any>(this.url)
      .pipe(
        tap(_ => this.log('Calling SalonService.')),
        catchError(this.handleError<SalonOffering>('getSalonService'))
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
    // TODO not implemented yet
  }
}
