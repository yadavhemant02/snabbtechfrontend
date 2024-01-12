import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { 

  }

  url = "http://localhost:5523"

  addData(data:any){
     return this.http.post(this.url+"/api/register",data);
  }

  loginData(data:any){
   return this.http.post(this.url+"/api/login",data);
  }

  forgetPassword(data:any){
     return this.http.post(this.url+"/api/forgetpassword",data);
  }

  resetpassword(data:any){
     return this.http.post(this.url+"/api/resetpassword",data);
  }


}
