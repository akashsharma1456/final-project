export class pizza {
  id: number;
  name: string;
  restaurant: string;
  web : string;
  description: string;
  ingredients: Array<string>;
  address: Array<any>

  constructor(pizzainfo: { id: any; name: any; restaurant: any; web: any; description: any; ingredients: any; address: any; }) {
    this.id = pizzainfo.id;
    this.name = pizzainfo.name;
    this.restaurant = pizzainfo.restaurant;
    this.web = pizzainfo.web;
    this.description = pizzainfo.description;
    this.ingredients = pizzainfo.ingredients;
    this.address = pizzainfo.address;
  }
}
