import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 name :string;
 password:string;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  login(){
    if(this.name=='users' && this.password=="123456789"){
      this.router.navigate(['home'])
    }
  }
  signup(){
    this.router.navigate(['signup'])
  }
}
