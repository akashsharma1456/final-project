import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { pizza } from '../components/models/pizza.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzas!: Array<pizza>;
  baseURL = 'https://my-burger-api.herokuapp.com/burgers';
  constructor(private http: HttpClient) { }

  getPizzas(query: string): Observable<Array<pizza>> {
    return this.http.get<any>(this.baseURL)
    .pipe(
      map( (results: any[]) => {
        const pizzas: pizza[] = [];
        results.forEach(result => {
          pizzas.push(new pizza(result.pizza));
        });
        return pizzas;
      })
    )
  }
}



