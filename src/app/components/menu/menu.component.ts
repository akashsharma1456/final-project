import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';
import { burger } from '../models/burger.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  burgers!: Array<burger>;
  query!: string;
  constructor(private route: ActivatedRoute, private pizzaService: BurgerService, private httpClient: HttpClient) { }
  // getBurgers() {
  //   this.burgerService.getBurger().subscribe((results) => {
  //     this.burgers = results.results;
  //     console.log('JSON Response = ', JSON.stringify(results));
  //   })
  // }
  ngOnInit(): void {
    // this.route.params.subscribe((p) => {
    //   this.query = p.query;
    //   this.BurgerService.getburgers(this.query).subscribe(
    //     (burgers) => { this.burgers = burgers; }
    //   );
    //   ( response : burger[]) => {
    //     console.log(response);
    //     this.burgers = response;
    //   }
    //});
    //this.BurgerService.getBurgers();
     this.getBurgers();
  };
   getBurgers() {
   this.httpClient.get<any>('https://my-burger-api.herokuapp.com/burgers').subscribe(
     (     response: burger[]) => {
       console.log(response);
       this.burgers = response;
     }
   );
   }
}
