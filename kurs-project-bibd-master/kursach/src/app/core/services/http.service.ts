import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credits } from '../interfaces/Credits.interface';
import { AuthService } from './auth.service';
import { header } from 'express-validator';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  sendGet<T>(url: string, reqHeaders?: {[name: string]: string}, params?: HttpParams): Observable<T> {
    const headers = this.setHeaders(reqHeaders, false);
    return this.httpClient.get<T>(url, { headers, params, });
  }

  sendPost<T>(url: string, isFile: boolean, body = null, reqHeaders?: {[name: string]: string}, params?: HttpParams): Observable<T> {
    const headers = this.setHeaders(reqHeaders, isFile);
    return this.httpClient.post<T>(url, body, { headers, params });
  }

  setHeaders(reqHeaders: {[name: string]: string}, isFile: boolean): HttpHeaders {
    // const ctype = isFile ? 'multipart/form-data' : 'application/json; charset=utf-8';
    const headers = new HttpHeaders(reqHeaders)
      // .set('Content-Type', ctype)
      .set('Authorization', this.getToken());
    return headers;
  }

  getToken(): string {
    const creds: Credits = JSON.parse(localStorage.getItem('credits'));
    return !!creds ? 'Bearer ' + creds.token : 'none';
  }


}
