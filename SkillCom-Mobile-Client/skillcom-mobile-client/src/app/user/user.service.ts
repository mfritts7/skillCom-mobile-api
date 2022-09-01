import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Plan } from '../plan/plan';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = `${environment.apiUrl}/User`
  constructor(private http: HttpClient) { }

  newPlan!: Plan

  tempUserData: User[] = [
    {"id":1,"name":"John Cena","email":"WrestleMania@gmail.com","plans":[]},
    {"id":2,"name":"Walter White","email":"WeNeedToCookJesse@yahoo.com","plans":[]},
    {"id":3,"name":"Barack Obama","email":"potus@gmail.com","plans":[]}
  ];
  
  add(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  // add(user: User): void {
  //   this.tempUserData.push(user);
  // }

  removePlan(i: number): void {
    this.tempUserData[0].plans.splice(i,1)
  }
}
