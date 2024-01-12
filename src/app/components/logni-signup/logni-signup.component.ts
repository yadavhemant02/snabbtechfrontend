import { Component } from '@angular/core';
import { Router, RouterConfigOptions } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-logni-signup',
  templateUrl: './logni-signup.component.html',
  styleUrls: ['./logni-signup.component.css']
})
export class LogniSignupComponent {

  data:any
  constructor(private service:UserServiceService, private router:Router){
     this.data = localStorage.getItem("user");
    console.log(this.data+"pppppp")
    if(!this.data){
           this.router.navigateByUrl("/")
    }
  }

  logout(){
     localStorage.removeItem("user");
     this.router.navigateByUrl("/")
  }


}
