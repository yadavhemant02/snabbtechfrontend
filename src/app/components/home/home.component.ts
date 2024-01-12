import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data={
    email:"",
    password:"",
    confirmpassword:""
  }

  constructor(private service:UserServiceService,private router:Router){

  }

  Response:any

  dosubmite(){

     console.log(this.data)
     if(this.data.password!=this.data.confirmpassword){
          this.Response="Please Match you password...!";
     }
     else{
     this.service.addData(this.data).subscribe((response:any)=>{
       console.log(response)
       this.Response="your data register SuccessFully..!";
       this.data.email="",
       this.data.password="",
       this.data.confirmpassword=""
      },
      (err)=>{
        console.log(err);
        this.Response="Email is Already Exist..!"
      })
    }
  }

  logindata={
    email:"",
    password:""
  }

  loginresponse:any

  login(){

   this.service.loginData(this.logindata).subscribe((response:any)=>{
    console.log(response);
    this.loginresponse="login Successfully..!"

    localStorage.setItem("user",response.email);

    this.router.navigateByUrl('/home')

   },
   (err)=>{
     console.log(err);
     this.loginresponse="your email and password are wrong..!"
   })

  }

}
