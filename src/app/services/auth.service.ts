import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users!: User[];

  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  GetApi: string='https://127.0.0.1:8000/getAllUsers';
  apiURL: string='https://127.0.0.1:8000/userCreate';
  apilogin: string='https://127.0.0.1:8000/api/login_check';
  deleteapi: string='https://127.0.0.1:8000/delete';


  token! : string;
  constructor(private router: Router, private http : HttpClient) {}
  
  login(user : User)
{
return this.http.post<User>(this.apilogin, user , {observe:'response'});
}

saveToken(jwt:string){
  localStorage.setItem('jwt',jwt);
  this.token = jwt;
  this.isloggedIn = true; 
  }
 


  listeUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.GetApi);
    }
    
    ajouterUser( user: User):Observable<User>{
      return this.http.post<User>(this.apiURL, user, httpOptions);
      }

      supprimerUser(id : number) {
        const url = `${this.deleteapi}/${id}`;
        return this.http.delete(url, httpOptions);
        }

     
 SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.email == curUser.email && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.email;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isUser(): Boolean {
    if (!this.isloggedIn)
      //this.roles== undefiened
      return false;
    return this.isloggedIn;
  }

  

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }
}
