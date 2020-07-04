import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Orders} from '../api/Orders';

@Injectable()
export class OrdersService {

  private baseurl = 'Orders';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: Orders): Observable<Orders> {
    return this.http.post(this.baseurl + '/create', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public get(id: number): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // GET
  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/getAll')
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // PUT
  public update(data: Orders): Observable<Orders> {
    return this.http.put(this.baseurl + '/update', data , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // DELETE
  public deleteClient(id: number) {
    return this.http.delete(this.baseurl + '/delete/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }


  public updateList(list: Orders[]): Observable<Orders[]> {
    return this.http.put(this.baseurl + '/updateList', list)
      .pipe(
        retry(1),
        catchError(this.errorHandl),
      );
  }

  // Error handling
  public errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
