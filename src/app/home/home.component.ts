import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  frozen(){
    this.router.navigate(['frozen'])
  }
  fruits(){
    this.router.navigate(['fruits'])
  }
  cleaner(){
    this.router.navigate(['cleaner'])
  }
  bakery(){
    this.router.navigate(['bakery'])
  }

  logout(){
    this.router.navigate(['login'])
  }
}
