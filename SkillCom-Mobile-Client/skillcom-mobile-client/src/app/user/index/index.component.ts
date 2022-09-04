import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';
import { Contract } from 'src/app/contract/contract';
import { ContractService } from 'src/app/contract/contract.service';
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
  activeUser!: User;
  userContracts!: Contract[];
  availablePlans!: Plan[];
  availableDevices!: Device[];

  constructor(private userService: UserService, private contractService: ContractService, private planService: PlanService, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.retrieveUser();
    this.retrieveContracts();
    this.retrievePlans();
    this.retrieveDevices();
    this.retrieveContracts();
  }


  retrieveUser() {
    this.userService.getUser().subscribe(u =>  this.activeUser = u);
  }

  retrieveContracts() {
    //this.userService.getContracts(this.activeUser.id).subscribe(c => this.userContracts = c);

    // this.contractService.getContractsTest().subscribe(c => this.userContracts = c,
    //   (count) => {for(var i=0; i < this.userContracts.length-1; i++){
    //     count = count + this.availablePlans[this.userContracts[i].planId].monthlyPrice + this.availableDevices[this.userContracts[i].deviceId].price/12
    //   }}
    // );

    this.contractService.getContractsTest().subscribe(c => this.userContracts = c);
  }

  // should this be moved to contract/edit.component.ts?
  deleteContract(contractId: number) {
    this.contractService.deleteContract(contractId).subscribe(() => {
      this.userContracts = this.userContracts.filter(c => c.id !== contractId);
    })
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

  userHasPlanType(pId: number): boolean {
    return this.planService.hasPlanType(pId, this.userContracts);
  }

  setPlan(pId: number) {
    this.planService.newPlan = JSON.parse(JSON.stringify(this.availablePlans[pId-1]));
  }
}
