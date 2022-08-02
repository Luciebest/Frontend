import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "User"
  constructor(private http: HttpClient) { }
/*
  public getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiURL}/${this.url}`);
  }

*/
}
