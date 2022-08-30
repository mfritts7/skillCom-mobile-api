import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanCreateComponent } from './create/create.component';
import { PlanIndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    PlanCreateComponent,
    PlanIndexComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
