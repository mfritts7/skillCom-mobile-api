import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { from,of,throwError,catchError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Plan } from './plan';
import { Contract } from 'src/app/contract/contract';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private planUrl: string = `${environment.apiUrl}/Plans`
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  newContract: Contract = {"userId":-1,"planId":-1,"deviceId":-1};
  // tempPlanData: Plan[] = [
  //   {"id":1,"planName":"Basic","monthlyPrice":10},
  //   {"id":2,"planName":"Advanced","monthlyPrice":40},
  //   {"id":3,"planName":"Premium","monthlyPrice":80}
  // ];

  constructor(private http: HttpClient) { }

  getPlans(): Observable<Plan[]> {
    console.log("Getting plans")
    return this.http.get<Plan[]>(this.planUrl, this.httpOptions);
  }
}
