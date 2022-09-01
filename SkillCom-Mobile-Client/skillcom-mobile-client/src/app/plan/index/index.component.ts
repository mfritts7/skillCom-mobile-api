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

  constructor(private planService: PlanService, private userService: UserService) {}


  ngOnInit(): void {
    // this.availablePlans = this.planService.tempPlanData
    this.retrievePlans()
  }

  retrievePlans() {
    this.planService.getPlans().subscribe(availablePlans => this.availablePlans = availablePlans)
  }

  // addPlan(id: number): void {
  //   this.planService.tempContract.planId = id
  // }

  // addPlan(id: number): Contract {
  //   this.contract.planId = id
  //   console.log(this.contract)
  //   return this.contract
  // }

  addPlan(plan: Plan): void {
    this.userService.newPlan = JSON.parse(JSON.stringify(plan))
    console.log(this.planService.tempPlanData)
  }

}
