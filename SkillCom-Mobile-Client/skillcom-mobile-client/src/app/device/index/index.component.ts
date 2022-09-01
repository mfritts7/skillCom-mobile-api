import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user/user.service';
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
  chosenPlan!: Plan;

  constructor(private deviceService: DeviceService, private userService: UserService, private planService: PlanService) { }

  ngOnInit(): void {
    // this.availableDevices = this.deviceService.tempDeviceData
    // this.availablePlans = this.planService.tempPlanData;
    this.chosenPlan = this.planService.newPlan;
    this.retrieveDevices();
  }

  retrieveDevices() : void{
    this.deviceService.getDevices().subscribe(availableDevices => this.availableDevices = availableDevices)
  }

  addDeviceWithId(id: number) {
    this.planService.newContract.deviceId = id;
    console.log("Added deviceId to newContract");
    console.log(this.planService.newContract);
  }

  addDevice(device: Device) {
    this.deviceService.newDevice = JSON.parse(JSON.stringify(device))
  }
}
