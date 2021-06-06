import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { burger } from '../components/models/burger.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  burgers!: Array<burger>;
  baseURL = 'https://my-burger-api.herokuapp.com/burgers';
  constructor(private http: HttpClient) { }

  getburgers(query: string): Observable<Array<burger>> {
    return this.http.get<any>(this.baseURL)
    .pipe(
      map( (results: any[]) => {
        const burgers: burger[] = [];
        results.forEach(result => {
          burgers.push(new burger(result.burger));
        });
        return burgers;
      })
    )
  }
}



