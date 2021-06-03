import { Component, OnInit } from '@angular/core';
import { pizza } from '../models/pizza.model'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class SearchResultsComponent implements OnInit {
  pizzas: Array<pizza> | undefined

  constructor() {
  }
  ngOnInit(): void {
  }
}
