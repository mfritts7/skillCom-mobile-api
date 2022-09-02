import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';
import { Contract } from 'src/app/contract/contract';
import { PlanService } from 'src/app/plan/plan.service';
import { Plan } from 'src/app/plan/plan';
import { DeviceService } from 'src/app/device/device.service';
import { Device } from 'src/app/device/device';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class UserIndexComponent implements OnInit {
  activeUser!: User
  userContracts!: Contract[]
  availablePlans!: Plan[]
  availableDevices!: Device[]

  constructor(private userService: UserService, private planService: PlanService, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.retrieveUser();
    this.retrieveContracts();
    this.retrievePlans();
    this.retrieveDevices();
  }

  retrieveUser() {
    // this.userService.getUser().subscribe(u => this.activeUser = u);
    this.activeUser = this.userService.getUserTest();
  }

  retrieveContracts() {
    this.userService.getContracts(this.activeUser.id).subscribe(c => this.userContracts = c);
  }

  retrievePlans() {
    this.planService.getPlans().subscribe(p => this.availablePlans = p);
  }

  retrieveDevices() {
    this.deviceService.getDevices().subscribe(d => this.availableDevices = d);
  }

  lookupPlan(id: number): Plan {
    return this.availablePlans.filter(p => p["id"] == id)[0];
  }

  lookupDevice(id: number): Device {
    return this.availableDevices.filter(d => d["id"] == id)[0];
  }
}
