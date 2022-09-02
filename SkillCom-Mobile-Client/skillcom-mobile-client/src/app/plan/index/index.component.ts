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
  availablePlans!: Plan[];

  constructor(private planService: PlanService, private userService: UserService) { }

  ngOnInit() {
    this.retrievePlans();
  }

  retrievePlans() {
    this.planService.getPlans().subscribe(p => this.availablePlans = p);
  }

  addPlan(plan: Plan) {
    this.planService.newPlan = JSON.parse(JSON.stringify(plan))
  }
}
