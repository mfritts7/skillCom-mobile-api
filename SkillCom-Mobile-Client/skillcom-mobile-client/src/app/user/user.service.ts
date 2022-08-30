import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = `${environment.apiUrl}/User`
  constructor(private http: HttpClient) { }

  // add(user: User): Observable<User> {
  //   return this.http.post<User>(this.userUrl, user);
  // }

  tempUserData: User[] = [
    {"id":1,"name":"John Cena","email":"WrestleMania@gmail.com"},
    {"id":2,"name":"Walter White","email":"WeNeedToCookJesse@yahoo.com"},
    {"id":3,"name":"Barrack Obama","email":"potus@gmail.com"}
  ];
  
  add(user: User): void {
    this.tempUserData.push(user);
  }
}
