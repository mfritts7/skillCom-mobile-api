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
  private userUrl: string = `${environment.apiUrl}/User`
  private planUrl: string = 'https://localhost:7080/api/Plans'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  tempContract: Contract = {"userId":69,"planId":69,"deviceId":69};
  tempPlanData: Plan[] = [
    {"id":1,"planName":"Basic","monthlyPrice":10},
    {"id":2,"planName":"Advanced","monthlyPrice":40},
    {"id":3,"planName":"Premium","monthlyPrice":80}
  ];

  constructor(private http: HttpClient) { }

  getPlans(): Observable<Plan[]>{
    console.log("Getting Plans!")
    return this.http.get<Plan[]>(this.planUrl,this.httpOptions);
  }
}
