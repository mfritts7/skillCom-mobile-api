import { Component, OnInit } from '@angular/core'

import { UserService } from 'src/app/user/user.service'
import { Contract } from 'src/app/contract/contract'
import { PlanService } from '../plan.service'
import { Plan } from '../plan'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PlanIndexComponent implements OnInit {
  availablePlans: Plan[] = []
  contract: Contract = this.planService.newContract

  constructor(private planService: PlanService, private userService: UserService) { }

  ngOnInit() {
    this.retrievePlans();
  }

  retrievePlans() {
    this.planService.getPlans().subscribe(availablePlans => this.availablePlans = availablePlans);
  }

  addPlan(id: number) {
    this.contract.planId = id
    console.log("Added planId to contract")
    console.log(this.contract)
  }
}
