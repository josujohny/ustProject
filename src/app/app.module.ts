import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FrozenFoodComponent } from './frozen-food/frozen-food.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CleanerComponent } from './cleaner/cleaner.component';
import { BakeryComponent } from './bakery/bakery.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FrozenFoodComponent,
    FruitsComponent,
    CleanerComponent,
    BakeryComponent,
    ViewCartComponent,
    SignupComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
