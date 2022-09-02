import { Component, OnInit } from '@angular/core'

import { UserService } from 'src/app/user/user.service'
import { PlanService } from '../plan.service'
import { Plan } from '../plan'
import { DeviceService } from 'src/app/device/device.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PlanIndexComponent implements OnInit {
  availablePlans!: Plan[];

  constructor(private planService: PlanService, private userService: UserService,private deviceService: DeviceService) { }

  ngOnInit() {
    this.retrievePlans();
  }

  retrievePlans() {
    this.planService.getPlans().subscribe(p => this.availablePlans = p);
  }

  addPlanWithId(id: number) {
    this.userService.newContract.planId = id;
    console.log("Added planId to newContract");
    console.log(this.userService.newContract);
    this.deviceService.newPlan.id = id;
  }

  // addPlan(plan: Plan) {
  //   this.planService.newPlan = JSON.parse(JSON.stringify(plan))
  // }
}
