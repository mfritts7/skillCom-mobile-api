import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { Contract } from '../contract/contract';
import { DeviceService } from '../device/device.service';
import { Device } from '../device/device';
import { PlanService } from '../plan/plan.service';
import { Plan } from '../plan/plan';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  chosenPlan!: Plan;
  chosenDevice!: Device;
  newContract: Contract = {"id":69, "userId":69, "planId":69, "deviceId":69};

  constructor(private userService: UserService, private planService: PlanService, private deviceService: DeviceService) { }
  

  ngOnInit(): void {
    this.chosenPlan = this.planService.newPlan;
    this.chosenDevice = this.deviceService.newDevice;
    // this.userService.getUser().subscribe(u => this.newContract.userId = u.id);
    this.newContract.userId = this.userService.getUserTest().id;
    console.log(this.newContract.userId);
    this.newContract.planId = this.planService.newPlan.id;
    console.log(this.newContract.planId);
    this.newContract.deviceId = this.deviceService.newDevice.id;
    console.log(this.newContract.deviceId);
  }

  addContract(contract: Contract): void {
    this.userService.addContract(contract);
  }
}
