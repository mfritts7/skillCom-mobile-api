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
  availableDevices!: Device[];
  chosenPlan!: Plan;

  constructor(private deviceService: DeviceService, private userService: UserService, private planService: PlanService) { }

  ngOnInit(): void {
    // this.availableDevices = this.deviceService.tempDeviceData
    // this.availablePlans = this.planService.tempPlanData;
    this.chosenPlan = this.deviceService.newPlan;
    //this.chosenPlan = {"id":69,"planName":"Test69Test","monthlyPrice":69};
    this.retrieveDevices();
  }

  retrieveDevices() : void{
    this.deviceService.getDevices().subscribe(d => this.availableDevices = d)
  }

  addDeviceWithId(id: number) {
    this.userService.newContract.deviceId = id;
    console.log("Added deviceId to newContract");
    console.log(this.userService.newContract);
  }

  addDevice(device: Device) {
    this.deviceService.newDevice = JSON.parse(JSON.stringify(device))
  }
}
