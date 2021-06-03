import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { SearchResultsComponent } from './components/result/result.component';

const routes: Routes = [
  //{ path: '', component: HeaderComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'search/:query', component: SearchResultsComponent},
  {path: 'id', component: PizzaDetailComponent},
  {path: '', component: MenuComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
