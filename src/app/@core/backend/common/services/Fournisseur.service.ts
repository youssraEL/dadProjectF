import {Injectable} from '@angular/core';
import {HttpService} from '../api/http.service';
import {Observable, throwError} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Fournisseur} from '../api/Fournisseur';

@Injectable()
export class FournisseurService {

  private baseurl = 'Fournisseur';


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpService) {
  }

  // POST JSON.stringify(data)
  public create(data: Fournisseur): Observable<Fournisseur> {
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
  public getByCin(ice: String): Observable<any> {
    return this.http.get(this.baseurl + '/getByIce/' + ice)
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
  public update(data: Fournisseur): Observable<Fournisseur> {
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


  public updateList(list: Fournisseur[]): Observable<Fournisseur[]> {
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
