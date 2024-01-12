import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {


  

  block=true
  email:any
  constructor(private service:UserServiceService){

  }

  data={
    email:''
  }

  forgetpass(){

    this.service.forgetPassword(this.data).subscribe((response:any)=>{
          console.log(response);
          this.block=false;
          this.email=this.data.email;
    },
    (err)=>{
      console.log(err)
      })

  }

}
