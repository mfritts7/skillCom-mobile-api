import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { ContractService } from '../contract/contract.service';
import { Contract } from '../contract/contract';
import { ContractDTO } from '../contract/contractDTO';
import { DeviceService } from '../device/device.service';
import { Device } from '../device/device';
import { PlanService } from '../plan/plan.service';
import { Plan } from '../plan/plan';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  chosenPlan!: Plan;
  chosenDevice!: Device;
  newContract: ContractDTO = {"userId":69,"planId":69,"deviceId":69};

  constructor(
    private userService: UserService,
    private contractService: ContractService,
    private planService: PlanService,
    private deviceService: DeviceService
  ) { }
  

  ngOnInit(): void {
    this.chosenPlan = this.planService.newPlan;
    this.chosenDevice = this.deviceService.newDevice;
    this.userService.getUser().subscribe(u => this.newContract.userId = u.id)
    this.newContract.planId = this.planService.newPlan.id;
    this.newContract.deviceId = this.deviceService.newDevice.id;
  }

  addContract(newContract: ContractDTO): void {
    this.contractService.addContract(newContract).subscribe();
  }
}
