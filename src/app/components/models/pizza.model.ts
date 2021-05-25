export class pizza {
  id: number;
  name: string;
  restaurant: string;
  web : string;
  description: string;
  ingredients: Array<string>;
  address: Array<string>;

  constructor(pizzainfo: { id: number; name: string; restaurant: string; web: string; description: string; ingredients: string[]; address: string[]; }) {
    this.id = pizzainfo.id;
    this.name = pizzainfo.name;
    this.restaurant = pizzainfo.restaurant;
    this.web = pizzainfo.web;
    this.description = pizzainfo.description;
    this.ingredients = pizzainfo.ingredients;
    this.address = pizzainfo.address;
  }
}
