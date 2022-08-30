import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private userUrl: string = `${environment.apiUrl}/User`
  constructor(private http: HttpClient) { }

  tempPlanData: Plan[] = [
    {"id":1,"name":"Basic","minutes":60,"monthlyCost":10},
    {"id":1,"name":"Advanced","minutes":120,"monthlyCost":40},
    {"id":1,"name":"Premium","minutes":180,"monthlyCost":80}
  ];
}
