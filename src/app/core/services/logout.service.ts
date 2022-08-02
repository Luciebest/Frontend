import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router:Router) {
  }

  isUserAuthenticated(){
    const token= localStorage.getItem("jwt");
    console.log(!!token);
    return !!token;

  }
  logout(){
    localStorage.removeItem("jwt");
    this.router.navigate(['/']);

  }

}
