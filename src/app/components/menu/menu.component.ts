import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { pizza } from '../models/pizza.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pizzas!: Array<pizza>;
  query!: string;
  constructor(private route: ActivatedRoute, private pizzaService: PizzaService, private httpClient: HttpClient) { }
  // getPizzas() {
  //   this.pizzaService.getPizzas().subscribe((results) => {
  //     this.pizzas = results.results;
  //     console.log('JSON Response = ', JSON.stringify(results));
  //   })
  // }
  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.query = p.query;
      this.pizzaService.getPizzas(this.query).subscribe(
        (pizzas) => { this.pizzas = pizzas; }
      );
      ( response : pizza[]) => {
        console.log(response);
        this.pizzas = response;
      }
    });
    //this.pizzaService.getPizzas();
     //this.getpizzas();
  };
  //  getpizzas() {
  //  this.httpClient.get<any>('https://my-burger-api.herokuapp.com/burgers').subscribe(
  //    (     response: pizza[]) => {
  //      console.log(response);
  //      this.pizzas = response;
  //    }
  //  );
  //  }
}
