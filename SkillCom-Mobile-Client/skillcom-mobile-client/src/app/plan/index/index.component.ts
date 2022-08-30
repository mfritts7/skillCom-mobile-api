import { Component, OnInit } from '@angular/core'

import { UserService } from 'src/app/user/user.service'
import { PlanService } from '../plan.service'
import { Plan } from '../plan'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PlanIndexComponent implements OnInit {
  availablePlans: Plan[] = []

  constructor(private planService: PlanService, private userService: UserService) { }

  ngOnInit(): void {
    this.availablePlans = this.planService.tempPlanData
  }

  addPlan(plan: Plan): void {
    this.userService.tempUserData[0].plans.push(plan)
  }

}
