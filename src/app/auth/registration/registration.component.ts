import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms'
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService) { }

  ngOnInit() {
  }
  registrationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.minLength(3)]],
    userPassword:['',[Validators.required,Validators.minLength(5)]],
    address:['',[Validators.required,Validators.minLength(3)]],
    mobileNumber:['',[Validators.required]]
  
  });
  
  get userName(){
    return this.registrationForm.get('userName');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get userPassword(){
    return this.registrationForm.get('userPassword');
  }
  get address(){
    return this.registrationForm.get('address');
  }
  get mobileNumber(){
    return this.registrationForm.get('mobileNumber');
  }

  onSubmit(){
    console.log("hellooooo");
    console.log(this.registrationForm.value);
    this.userService.addUser(this.registrationForm.value).subscribe(data=>{
      console.log(data);
    });
  }

}
