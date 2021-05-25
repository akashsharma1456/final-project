import { Component, OnInit } from '@angular/core';
import { pizza } from '../models/pizza.model';
import { PizzaService } from './../../services/pizza.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class SearchResultsComponent implements OnInit {
  query : string | undefined;
  public pizzas : pizza[] | undefined;
  constructor(private route: ActivatedRoute, private pizzaService: PizzaService) {}
  ngOnInit(): void {
   this.pizzas = this.pizzaService.getPizzas();
  }
}
