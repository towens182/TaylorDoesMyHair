import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SalonOffering } from 'src/models/salonOffering';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SalonservicesService {

  private url = "http://localhost:8080/services";

  constructor(private http: HttpClient) { }

  getServices(){
    return this.http.get<any>(this.url, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An unexpected error occurred:', error.error.message);
    } else {
      // Something wrong happened on the server side
      console.error(
        `Server returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    // TODO: specify message for each service
    return throwError('Calling SalonServices web service...');
  };
}
