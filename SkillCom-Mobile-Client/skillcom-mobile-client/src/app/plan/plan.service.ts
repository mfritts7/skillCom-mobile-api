import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Contract } from '../contract/contract';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private planUrl: string = `${environment.apiUrl}/Plans`
  constructor(private http: HttpClient) { }

  tempContract!: Contract;

  tempPlanData: Plan[] = [
    {"id":1,"name":"Basic","monthlyCost":10,"devices":[]},
    {"id":2,"name":"Advanced","monthlyCost":40,"devices":[]},
    {"id":3,"name":"Premium","monthlyCost":80,"devices":[]}
  ];

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.planUrl);
  }
}
