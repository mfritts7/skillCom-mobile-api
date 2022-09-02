import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from './user';
import { Contract } from '../contract/contract';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = `${environment.apiUrl}/Users`;
  private contractUrl: string = `${environment.apiUrl}/Contracts`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  // tempUserData: User[] = [
  //   {"id":1,"name":"John Cena","email":"WrestleMania@gmail.com"},
  //   {"id":2,"name":"Walter White","email":"WeNeedToCookJesse@yahoo.com"},
  //   {"id":3,"name":"Barack Obama","email":"potus@gmail.com"}
  // ]

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl, this.httpOptions);
  }

  getUserTest(): User {
    return {"id":22, "name":"Taylor", "email":"test@test.com"}
  }
  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  getContracts(userId: number): Observable<Contract[]> {
    let url = `${this.contractUrl}/User/${userId}`;
    return this.http.get<Contract[]>(url);
  }

  // just for testing - fetches all contracts by all users, instead of one user
  getContractsTest(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractUrl, this.httpOptions);
  }

  addContract(newContract: Contract): Observable<Contract> {
     return this.http.post<Contract>(this.contractUrl, newContract);
  }

  deleteContract(contractId: number): Observable<Contract> {
    console.log(`UserService.deleteContract(${contractId}) was called`);
    return this.http.delete<Contract>(`${this.contractUrl}/${contractId}`);
  }
}
