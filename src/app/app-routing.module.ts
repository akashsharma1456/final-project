import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BurgerDetailComponent } from './components/burger-detail/burger-detail.component';
const routes: Routes = [
  //{ path: '', component: HeaderComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'id', component: BurgerDetailComponent},
  {path: '', component: MenuComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
