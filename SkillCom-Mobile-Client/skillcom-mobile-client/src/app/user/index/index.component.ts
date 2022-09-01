import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { PlanService } from 'src/app/plan/plan.service';
import { Plan } from 'src/app/plan/plan';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class UserIndexComponent implements OnInit {
  userPlans: Plan[] = [];

  constructor(private userService: UserService, private planService: PlanService) { }

  ngOnInit(): void {
    // this.userPlans = this.userService.tempUserData[0].plans
  }

  // removeContract(i: number): void {
  //   this.userService.removePlan(i)
  // }

  // lookupPlan(id: number): Plan {
  //   return this.planService.tempPlanData[id-1]
  // }

}
