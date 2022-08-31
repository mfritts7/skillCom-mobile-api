import { Component, OnInit,Input } from '@angular/core'

import { UserService } from 'src/app/user/user.service'
import { Plan } from 'src/app/plan/plan'
import { DeviceService } from '../device.service'
import { Device } from '../device'
import { PlanService } from 'src/app/plan/plan.service'
import { Contract } from 'src/app/contract/contract'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class DeviceIndexComponent implements OnInit {
  @Input() availableDevicesInput : Device[] = [];
  availableDevices: Device[] = []
  availablePlans : Plan[] = []
  tempContract: Contract = {"userId":69,"planId":69,"deviceId":69};  
  plan!: Plan

  constructor(private deviceService: DeviceService, private userService: UserService,private planService: PlanService) { }

  ngOnInit(): void {
    //this.availableDevices = this.deviceService.tempDeviceData

    this.availablePlans = this.planService.tempPlanData
    this.tempContract = this.planService.tempContract

    this.retrieveDevices();

  }

  retrieveDevices() : void{
    this.deviceService.getDevices().subscribe(availableDevices => this.availableDevices = availableDevices)
 
  }

  // addDevice(id: number): Contract {
  //   this.planIndexComponent.contract.deviceId = id
  //   console.log(this.planIndexComponent.contract)
  //   return this.planIndexComponent.contract
  //   //this.userService.tempUserData[0].plans.push(this.plan)
  // }

  addDevice(id: number): Contract {
    this.planService.tempContract.deviceId = id
    console.log("Added device id to contract")
    console.log(this.tempContract)
    return this.planService.tempContract
  }

}
