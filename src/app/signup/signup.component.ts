import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  password : string;
  cpassword:string;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  login(){
    if(this.password==this.cpassword){
    this.router.navigate(['login'])
    }
    else{
      window.alert('incorrect password')
    }
  }

}
