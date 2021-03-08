import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;
  constructor(private AuthService : AuthService, private Router: Router) {}

  ngOnInit(): void {}

  onLoggedin() {
    console.log(this.user);
    //let isValidUser de type boolean vas se servire de la methode Signin crrer dans le auth service afin de verifier les acces
    let isValidUser: Boolean = this.AuthService.SignIn(this.user);
    //si les identifiants donnes sont correct alors il return  a la racine du projet
    if (isValidUser) this.Router.navigate(['/']);
    else alert('Login ou mot de passe incorrecte!');
    //alert('Login ou mot de passe incorrecte!');
     this.erreur = 1;
  }
}
