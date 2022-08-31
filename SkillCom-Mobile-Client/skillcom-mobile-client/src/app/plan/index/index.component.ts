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
  //contract: Contract = {"userId":69,"planId":69,"deviceId":69};
  contract: Contract = this.planService.tempContract

  constructor(private planService: PlanService, private userService: UserService) { }

  ngOnInit(): void {
    //this.availablePlans = this.planService.tempPlanData
   //this.availablePlans = this.planService.tempPlanData
    this.retrievePlans()


  }
  retrievePlans() : void {
    this.planService.getPlans().subscribe(availablePlans => this.availablePlans = availablePlans)
  
  }

  addPlan(id: number): Contract {
    this.contract.planId = id
    console.log("added plan id to contract")
    console.log(this.contract)
    return this.contract
  }

  // addPlan(plan: Plan): void {
  //   this.userService.tempUserData[0].plans.push(plan)
  // }

}
