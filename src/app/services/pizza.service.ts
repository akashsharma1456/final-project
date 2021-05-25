import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(
    private http: HttpClient
  ) { }

  getPizzas() {
    return this.http.get('https://my-burger-api.herokuapp.com/burgers')
  }
}
