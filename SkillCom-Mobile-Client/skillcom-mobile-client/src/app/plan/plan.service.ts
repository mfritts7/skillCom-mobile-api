import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  constructor() { }
}
