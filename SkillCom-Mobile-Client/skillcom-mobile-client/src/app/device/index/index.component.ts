import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user/user.service';
import { Contract } from 'src/app/contract/contract';
import { PlanService } from 'src/app/plan/plan.service';
import { Plan } from 'src/app/plan/plan';
import { DeviceService } from '../device.service';
import { Device } from '../device';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class DeviceIndexComponent implements OnInit {
  availableDevices: Device[] = [];
  availablePlans : Plan[] = [];
  tempContract!: Contract;
  plan!: Plan;

  constructor(private deviceService: DeviceService, private userService: UserService, private planService: PlanService) { }

  ngOnInit(): void {
    // this.availableDevices = this.deviceService.tempDeviceData
    // this.availablePlans = this.planService.tempPlanData;
    this.tempContract = this.planService.newContract;
    this.retrieveDevices();
  }

  retrieveDevices() : void{
    this.deviceService.getDevices().subscribe(availableDevices => this.availableDevices = availableDevices)
  }

  addDevice(id: number): Contract {
    this.planService.newContract.deviceId = id;
    console.log("Added device id to contract");
    console.log(this.tempContract);
    return this.planService.newContract;
  }
}
