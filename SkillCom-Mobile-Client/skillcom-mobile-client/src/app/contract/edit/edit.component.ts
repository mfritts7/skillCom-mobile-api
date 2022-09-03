import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContractService } from '../contract.service';
import { Contract } from '../contract';
import { DeviceService } from 'src/app/device/device.service';
import { Device } from 'src/app/device/device';
import { PlanService } from 'src/app/plan/plan.service';
import { Plan } from 'src/app/plan/plan';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ContractEditComponent implements OnInit {
  contract!: Contract;
  plan!: Plan;
  device!: Device;

  constructor(
    private contractService: ContractService,
    private planService: PlanService,
    private deviceService: DeviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.url.join('/');
    this.lookupContract(+id.split('/')[2]);
  }

  lookupContract(id: number) {
    this.contractService.getContract(id).subscribe(c => {
      this.contract = c;
      this.planService.getPlans().subscribe(plans => {
        this.plan = plans.filter(p => p["id"] == this.contract.planId)[0];
      });
      this.deviceService.getDevices().subscribe(devices => {
        this.device = devices.filter(d => d["id"] == this.contract.deviceId)[0];
      });
    });
  }
}
