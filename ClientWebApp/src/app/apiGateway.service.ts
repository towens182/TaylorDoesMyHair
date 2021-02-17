import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, pipe, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,OPTIONS'
    })
};

@Injectable({ providedIn: 'root' })
export class ApiGatewayService {

    // TODO set to app config properties
    private baseUrl = "https://9tylgr75o1.execute-api.us-east-1.amazonaws.com/test";

    constructor(
        private http: HttpClient) { }

    getHours() {
        return this.http.post<any>(
            `${this.baseUrl}/hours`, null)
            .pipe(
                catchError(this.handleError)
            );
    }
    
    // TODO handle respnse success/failure
    submitFeedback(payload: string) {
        return this.http.post<any>(
            `${this.baseUrl}/feedback`, payload)
            .pipe(
                catchError(this.handleError)
            );
    }

    getServices() {
        return this.http.post<any>(
            `${this.baseUrl}/services`, null)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('An unexpected error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        // TODO: specify message for each service
        return throwError('Something wrong happened; please try again later.');
    };
}
