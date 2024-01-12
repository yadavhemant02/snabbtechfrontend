import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {

  block=true
  data={
    email:"",
    password:"",
    confirmpassword:""
  }

  massege:any
  constructor(private route:ActivatedRoute, private service:UserServiceService){
    const emaildata = this.route.snapshot.paramMap.get('email');
    console.log(emaildata);
    if(emaildata){

      this.data.email=emaildata;
    }
    console.log(this.data.email)
  }

  resetpassword(){
     console.log(this.data)


     
     if(this.data.email){

       this.service.resetpassword(this.data).subscribe((response:any)=>{
         console.log(response);
         this.block=false
         this.massege="password reset successfully..!"
           },
       (err)=>{
            console.log(err)
            this.massege="please check you password";
       })
     }
     else{
      console.log("email not found")
     }


  }
}
