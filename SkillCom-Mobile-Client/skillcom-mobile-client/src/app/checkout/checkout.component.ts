import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { ContractService } from '../contract/contract.service';
import { Contract } from '../contract/contract';
import { ContractDTO } from '../contract/contractDTO';
import { DeviceService } from '../device/device.service';
import { Device } from '../device/device';
import { PlanService } from '../plan/plan.service';
import { Plan } from '../plan/plan';
import { UserService } from '../user/user.service';
import { ContractService } from '../contract/contract.service';
import { Contract } from '../contract/contract';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ContractDTO } from '../contract/contractDTO';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  chosenPlan!: Plan;
  chosenDevice!: Device;
  newContract: ContractDTO = {"userId":69,"planId":69,"deviceId":69};

  constructor(private userService: UserService, private contractService: ContractService, private planService: PlanService, private deviceService: DeviceService) { }
  

  ngOnInit(): void {
    this.chosenPlan = this.deviceService.newPlan;
    this.chosenDevice = this.deviceService.newDevice;
    this.userService.getUser().subscribe(u => this.newContract.userId = u.id)
    this.newContract.planId = this.planService.newPlan.id;
    this.newContract.deviceId = this.deviceService.newDevice.id;
  }

  addContract(): void {
    this.contractService.addContract(this.newContract).subscribe();
  }
}
