import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { username: 'admin', password: 'admin', roles: ['ADMIN'] },
    { username: 'martial', password: '123', roles: ['USER'] },
    { username: 'mandson1er', password: '123', roles: ['ADMIN'] },
  ];

  public loggedUser: string; //vas servire a stocker le user name
  public isloggedIn: Boolean = false; //si il est connecter il return true sinon false
  public roles: string[]; //un tableau qui retourne les role
  constructor(private Router: Router) {}

  //cette methode prend en parametre un user et return un booleean; il verrifie les accees
  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (
        user.username === curUser.username &&
        user.password == curUser.password
      ) {
        validUser = true; // si les identifiants sont correct alors renvoie true
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;

        localStorage.setItem('loggedUser', this.loggedUser);
        //local storage ne stocke que des chaine de caractere raison pour laquelle on convertie isloggedIn en string
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    //return vrai ou faux
    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles)
      //this.roles== undefiened
      return false;
    return this.roles.indexOf('ADMIN') > -1;
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.Router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login : string)
   {
     this.loggedUser = login; this.isloggedIn = true;
      this.getUserRoles(login);
    }

    getUserRoles(username :string)
    {
      this.users.forEach((curUser) => {
         if( curUser.username == username )
          {
             this.roles = curUser.roles;
           }
          });
         }

}


