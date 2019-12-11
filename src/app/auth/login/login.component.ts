import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

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
    //console.log(this.LoginForm.value);

    console.log(this.LoginForm.value);
  this.userService.validate(this.LoginForm.value.email,this.LoginForm.value.userPassword).subscribe(
    data=>{
      let userObj=data;

      sessionStorage.setItem("uObj",JSON.stringify("userObj"))
      alert("Welcome");
      
      if(data.role == 'Seller'){

 
        console.log("Seller")
        this.router.navigate(['./sellerPage']);
        }
        else if(data.role=='buyer'){
          console.log("buyer")
          this.router.navigate(['./buyerPage']);
        }
        else if(data.role=='Vendor'){
          console.log("vendor")
          this.router.navigate(['./vendorPage']);
        }
        else
        {
          alert(" invalid!");
          this.router.navigate(['./']);
       }
  

    },
    error=>{
      alert("Email or Password is incorrect");
    }
  );

  }


}
