import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Contract } from './contract';
import { ContractDTO } from './contractDTO';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private contractUrl: string = `${environment.apiUrl}/Contracts`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContracts(userId: number): Observable<Contract[]> {
    let url = `${this.contractUrl}/User/${userId}`;
    return this.http.get<Contract[]>(url);
  }

  // just for testing - fetches all contracts by all users, instead of one user
  getContractsTest(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractUrl, this.httpOptions);
  }

  addContract(newContract: ContractDTO): Observable<Contract> {
    console.log(`UserService.addContract() was called`);
    console.log(`${this.contractUrl}`);
    console.log(`${newContract.userId} ${newContract.planId} ${newContract.deviceId}`)
    return this.http.post<Contract>(this.contractUrl, newContract);
  }

  deleteContract(contractId: number): Observable<Contract> {
    console.log(`UserService.deleteContract(${contractId}) was called`);
    console.log(`${this.contractUrl}/${contractId}`);
    return this.http.delete<Contract>(`${this.contractUrl}/${contractId}`, this.httpOptions);
  }
}
