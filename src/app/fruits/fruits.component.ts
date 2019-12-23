import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  continue(){
    this.router.navigate(['frozen'])
}
addCart(){
  this.router.navigate(['cart'])
}
logout(){
  this.router.navigate(['login'])
}
back(){
  this.router.navigate(['home'])
}
}
