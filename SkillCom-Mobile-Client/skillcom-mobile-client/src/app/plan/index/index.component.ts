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
  userService!: UserService

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.availablePlans = this.planService.tempPlanData
  }

  addPlan(id: number): void {
    this.userService.tempUserData[0].plans.push(this.findPlan(id))
  }

  findPlan(id:number): Plan {
    return this.availablePlans[id-1]
  }

}
