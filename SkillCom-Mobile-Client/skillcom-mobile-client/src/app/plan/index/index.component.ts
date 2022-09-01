import { Component, OnInit } from '@angular/core'

import { UserService } from 'src/app/user/user.service'
import { PlanService } from '../plan.service'
import { Plan } from '../plan'
import { Contract } from 'src/app/contract/contract'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PlanIndexComponent implements OnInit {
  availablePlans: Plan[] = []
  contract: Contract = this.planService.tempContract

  constructor(private planService: PlanService, private userService: UserService) { }

  ngOnInit(): void {
    this.retrievePlans();
  }

  retrievePlans(): void {
    this.planService.getPlans().subscribe(availablePlans => this.availablePlans = availablePlans);
  }

  addPlan(id: number): Contract {
    this.contract.planId = id
    console.log("added plan id to contract")
    console.log(this.contract)
    return this.contract
  }
}
