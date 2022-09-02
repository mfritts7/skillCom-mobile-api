import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of, throwError, catchError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Plan } from './plan';
import { Contract } from 'src/app/contract/contract';
import { ContractDTO } from '../contract/contractDTO';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private planUrl: string = `${environment.apiUrl}/Plans`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  // tempPlanData: Plan[] = [
  //   {"id":1,"planName":"Basic","monthlyPrice":10},
  //   {"id":2,"planName":"Advanced","monthlyPrice":40},
  //   {"id":3,"planName":"Premium","monthlyPrice":80}
  // ];

  constructor(private http: HttpClient) { }

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.planUrl, this.httpOptions);
  }
}
