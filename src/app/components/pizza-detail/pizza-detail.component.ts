import { Component, OnInit, Input } from '@angular/core';
import { pizza } from '../models/pizza.model';
@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  @Input() pizza!: pizza;
  constructor() {
  }
ngOnInit(): void {
  }
}
