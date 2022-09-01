import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device/device.service';
import { Device } from '../device/device';
import { PlanService } from '../plan/plan.service';
import { Plan } from '../plan/plan';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  chosenPlan!: Plan
  chosenDevice!: Device

  constructor(private userService: UserService, private planService: PlanService, private deviceService: DeviceService) { }
  

  ngOnInit(): void {
    this.chosenPlan = this.planService.newPlan;
    this.chosenDevice = this.deviceService.newDevice;
  }

  addContract(): void {
    // this.userService.tempUserData[0].plans.push(this.userService.newPlan)
  }

}
