import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Response } from '../_models/response';

@Injectable({
  providedIn: 'root'
})

export class TesAngularService {
  constructor(
    private url: HttpClient, 
    private msg: 'Error',
    private api = 'https://api.todoist.com/rest/v1/tasks'
  ) {}

  ConfigHeader = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.api,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  ErrorExp(error: HttpErrorResponse): Observable<never> {
    return;
  }

  requestCreate(data): Observable<Response> {
    return this.url
      .post<Response>(this.api, data, this.ConfigHeader)
      .pipe(catchError(this.ErrorExp));
  }

}
