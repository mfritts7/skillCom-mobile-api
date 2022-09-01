import { Component, OnInit } from '@angular/core';
// import { Contract } from '../contract/contract';
import { Device } from '../device/device';
import { DeviceService } from '../device/device.service';
import { Plan } from '../plan/plan';
import { PlanService } from '../plan/plan.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  availableDevices: Device[] = []
  availablePlans : Plan[] = []
  newPlan!: Plan
  // tempContract!: Contract  

  constructor(private userService: UserService, private planService: PlanService, private deviceService: DeviceService) { }
  

  ngOnInit(): void {
    this.availablePlans = this.planService.tempPlanData
    this.availableDevices = this.deviceService.tempDeviceData
    //this.newPlan = this.userService.newPlan
    // this.tempContract = this.planService.tempContract
  }

  addContract(): void {
    //this.userService.tempUserData[0].plans.push(this.userService.newPlan)
  }

}
