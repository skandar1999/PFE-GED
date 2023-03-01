import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users!: User[];
  username!:string;
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  GetApi: string='https://127.0.0.1:8000/getAllUsers';
  apiURL: string='https://127.0.0.1:8000/userCreate';
  apilogin: string='https://127.0.0.1:8000/api/login_check';
  deleteapi: string='https://127.0.0.1:8000/delete';
  rechuser: string='https://127.0.0.1:8000/finduser';


  constructor(private http : HttpClient, private authService: AuthService   ) { }
  public data: string | null = null;


  listeUsers(): Observable<User[]>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<User[]>(this.GetApi,{headers:httpHeaders});

    }

    consulterUser(id: number): Observable<User> {
      const url = `${this.GetApi}/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<User>(url,{headers:httpHeaders});
      }
      
    
      chercheuser( username: string):Observable< User[]> {
        const url = `${this.rechuser}/username/${this.username}`;
        return this.http.get<User[]>(url);
        }
    
      

}
