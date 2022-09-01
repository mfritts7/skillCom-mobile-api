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
  availablePlans: Plan[] = [];

  constructor(private planService: PlanService, private userService: UserService) { }

  ngOnInit() {
    this.retrievePlans();
  }

  retrievePlans() {
    this.planService.getPlans().subscribe(plans => this.availablePlans = plans);
  }

  addPlanWithId(id: number) {
    this.planService.newContract.planId = id;
    console.log("Added planId to newContract");
    console.log(this.planService.newContract);
  }

  addPlan(plan: Plan) {
    this.planService.newPlan = JSON.parse(JSON.stringify(plan))
  }
}
