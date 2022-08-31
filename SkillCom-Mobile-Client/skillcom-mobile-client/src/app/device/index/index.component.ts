import { Component, OnInit } from '@angular/core'

import { UserService } from 'src/app/user/user.service'
import { Plan } from 'src/app/plan/plan'
import { DeviceService } from '../device.service'
import { Device } from '../device'
import { Contract } from 'src/app/contract/contract'
import { PlanIndexComponent } from 'src/app/plan/index/index.component'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class DeviceIndexComponent implements OnInit {
  availableDevices: Device[] = []
  plan!: Plan

  constructor(private deviceService: DeviceService, private userService: UserService/*, private planIndexComponent: PlanIndexComponent*/) { }

  ngOnInit(): void {
    this.availableDevices = this.deviceService.tempDeviceData
  }

  // addDevice(id: number): Contract {
  //   this.planIndexComponent.contract.deviceId = id
  //   console.log(this.planIndexComponent.contract)
  //   return this.planIndexComponent.contract
  //   //this.userService.tempUserData[0].plans.push(this.plan)
  // }

  addDevice(id: number): void {
    
  }

}
