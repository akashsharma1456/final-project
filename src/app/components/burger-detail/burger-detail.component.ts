import { Component, OnInit, Input } from '@angular/core';
import { burger } from '../models/burger.model';
@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {

  @Input() burger!: burger;
  constructor() {
  }
ngOnInit(): void {
  }
}
