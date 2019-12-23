import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FrozenFoodComponent } from './frozen-food/frozen-food.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CleanerComponent } from './cleaner/cleaner.component';
import { BakeryComponent } from './bakery/bakery.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { SignupComponent } from './signup/signup.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {path:"",component:MainPageComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"frozen",component:FrozenFoodComponent},
  {path:"fruits",component:FruitsComponent},
  {path:"cleaner",component:CleanerComponent},
  {path:"bakery",component:BakeryComponent},
  {path:"cart",component:ViewCartComponent},
  {path:"signup",component:SignupComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
