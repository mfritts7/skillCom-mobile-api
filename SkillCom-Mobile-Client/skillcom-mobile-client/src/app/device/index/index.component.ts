import { Component, OnInit } from '@angular/core'

import { UserService } from 'src/app/user/user.service'
import { DeviceService } from '../device.service'
import { Device } from '../device'
import { PlanService } from 'src/app/plan/plan.service'
import { Plan } from 'src/app/plan/plan'
// import { Contract } from 'src/app/contract/contract'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class DeviceIndexComponent implements OnInit {
  availableDevices: Device[] = []
  availablePlans: Plan[] = []
  newPlan!: Plan
  // tempContract!: Contract

  constructor(private deviceService: DeviceService, private userService: UserService, private planService: PlanService) { }

  ngOnInit(): void {
    this.availableDevices = this.deviceService.tempDeviceData
    this.availablePlans = this.planService.tempPlanData
    this.newPlan = this.userService.newPlan
    // this.tempContract = this.planService.tempContract
  }

  // addDevice(id: number): void {
  //   this.planService.tempContract.deviceId = id
  // }

  // addDevice(device: Device): void {
  //   this.userService.tempUserData[0].plans[0].devices.push(device)
  // }

  addDevice(device: Device): void {
    this.userService.newPlan.devices.push(device)
    console.log(this.userService.newPlan)
  }

}
