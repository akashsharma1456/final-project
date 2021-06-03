import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { pizza } from '../components/models/pizza.model';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  baseURL = 'https://my-burger-api.herokuapp.com/burgers'
  constructor(private http: HttpClient) { }
  getPizzas() {
    const url = `${this.baseURL}`;
    map( (results: any[]) => {
      const pizzas: pizza[] = [];
      results.forEach(result => {
        pizzas.push(new pizza(result.pizza));
      });
    return pizzas;
    })

  }
}



