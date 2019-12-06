import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  LoginForm=this.fb.group({
    email:['',[Validators.required,Validators.minLength(3)]],
    userPassword:['',[Validators.required]]
  
  });
  
  get email(){
    return this.LoginForm.get('email');
  }
  get userPassword(){
    return this.LoginForm.get('userPassword');
  }
  onSubmit(){
    console.log("hellooooo");
    console.log(this.LoginForm.value);
  }


}
