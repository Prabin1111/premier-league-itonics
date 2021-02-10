import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type Params = HttpParams | {
  [param: string]: string | string[];
}

export type Headers = HttpHeaders | {
  [header: string]: string | string[];
}

export interface HttpOption {
  headers?: Headers;
  observe?: "body" | undefined;
  params?: Params;
  reportProgress?: boolean | undefined;
  responseType?: "json";
  withCredentials?: boolean | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private _baseUrl = environment.baseUrl;

  private _httpOption: HttpOption = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  private _retryCount = 2;

  constructor(private httpClient: HttpClient) { }

  get<R>(url: string, params?: Params): Observable<R> {
    return this.httpClient.get<R>(`${this._baseUrl}/${url}`, { ...this._httpOption, params })
      .pipe(
        retry(this._retryCount)
      )
  }

  post<T, R>(url: string, body: T | null, params: Params): Observable<R> {
    return this.httpClient.post<R>(`${this._baseUrl}/${url}`, body, { ...this._httpOption, params })
      .pipe(
        retry(this._retryCount)
      )
  }

  delete<R>(url: string, params: Params): Observable<R> {
    return this.httpClient.delete<R>(`${this._baseUrl}/${url}`, { ...this._httpOption, params })
      .pipe(
        retry(this._retryCount)
      )
  }

  put<T, R>(url: string, body: T | null, params: Params): Observable<R> {
    return this.httpClient.put<R>(`${this._baseUrl}/${url}`, body, { ...this._httpOption, params })
      .pipe(
        retry(this._retryCount)
      )
  }

  patch<T, R>(url: string, body: T | null, params: Params): Observable<R> {
    return this.httpClient.patch<R>(`${this._baseUrl}/${url}`, body, { ...this._httpOption, params })
      .pipe(
        retry(this._retryCount)
      )
  }
}
