import { Component, OnInit } from '@angular/core';

import { PlanService } from '../plan.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PlanIndexComponent implements OnInit {
  plans: Plan[] = this.planService.tempPlanData;

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    
  }

  addPlan(id: number): void {
    
  }

}
