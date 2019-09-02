import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private http : HttpClient) { }
  getYmls(): Observable<any> {
      return this.http.get("http://localhost:8888/a", { observe: 'response' });

  }
}
