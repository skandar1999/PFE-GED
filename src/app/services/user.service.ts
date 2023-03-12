import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users!: User[];
  email!:string;
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  GetApi: string='https://127.0.0.1:8000/getAllUsers';
  apiURL: string='https://127.0.0.1:8000/userCreate';
  apilogin: string='https://127.0.0.1:8000/api/login_check';
  deleteapi: string='https://127.0.0.1:8000/delete';
  findUsername: string='https://127.0.0.1:8000/findByUsername';
  findUserEmail: string='https://127.0.0.1:8000/findByEmail';
  updateUser: string='https://127.0.0.1:8000/updateUser';
  userbyid: string='https://127.0.0.1:8000/findById';


  constructor(private http : HttpClient, private authService: AuthService 
    ) { }
  public data: string | null = null;
  private user: any;


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
      

      rechercherParUsername(username: string):Observable< User[]> {
        const url = `${this.findUsername}/${username}`;
        return this.http.get<User[]>(url);
        }
        
    
        rechercherParEmail(email: string):Observable< User[]> {
          const url = `${this.findUserEmail}/${email}`;
          return this.http.get<User[]>(url);
          }

          Update(email: string , updatedUser: User): Observable<any> {
            return this.http.put(`${this.updateUser}/${email}`, updatedUser);
          }
          
    
          
          consulterUserById(id: number): Observable<User> {
            const url = `${this.userbyid}/${id}`;
            return this.http.get<User>(url);
          }


         
          

}
