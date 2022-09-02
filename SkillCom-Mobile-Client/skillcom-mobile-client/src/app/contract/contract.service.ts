import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HttpHeaders } from '@angular/common/http';
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
  }
  constructor(private http: HttpClient) { }

  addPlan(): void {

  }
  
  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractUrl, this.httpOptions);
  }

  createContract(contract: ContractDTO): Observable<Contract>{
    return this.http.post<Contract>(this.contractUrl,contract,this.httpOptions)
  }
  // createFlight(flight:Flight): Observable<Flight>{
  //   return this.http.post<Flight>(this.flightUrl,flight,this.httpOptions)
  // }

  addDevice(): void {
    
  }
}
