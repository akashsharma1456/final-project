export class burger {
  id: number;
  name: string;
  restaurant: string;
  web : string;
  description: string;
  ingredients: Array<string>;
  address: Array<any>

  constructor(burgerinfo: { id: any; name: any; restaurant: any; web: any; description: any; ingredients: any; address: any; }) {
    this.id = burgerinfo.id;
    this.name = burgerinfo.name;
    this.restaurant = burgerinfo.restaurant;
    this.web = burgerinfo.web;
    this.description = burgerinfo.description;
    this.ingredients = burgerinfo.ingredients;
    this.address = burgerinfo.address;
  }
}
