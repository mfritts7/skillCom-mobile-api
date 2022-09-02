import { Component, OnInit } from '@angular/core';


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
  chosenPlan!: Plan
  chosenDevice!: Device
  contractToPost : ContractDTO ={"userId": 1,"planId":2,"deviceId":2}
  newContract:Contract = {"id":69,"userId": 1,"planId":2,"deviceId":2}
  
  constructor(private userService: UserService, private planService: PlanService, private deviceService: DeviceService,
    private contractService: ContractService) { }
  

  ngOnInit(): void {
    this.chosenPlan = this.deviceService.newPlan;
    this.chosenDevice = this.deviceService.newDevice;
    // this.userService.getUser().subscribe(u => this.newContract.userId = u.id);
    this.newContract.planId = this.planService.newPlan.id;
    console.log(this.newContract.planId);
    this.newContract.deviceId = this.deviceService.newDevice.id;
    console.log(this.newContract.deviceId);
  }

  addContract(): void {
this.contractService.createContract(this.contractToPost).subscribe(() =>console.log("Added Contract"))  }
}
