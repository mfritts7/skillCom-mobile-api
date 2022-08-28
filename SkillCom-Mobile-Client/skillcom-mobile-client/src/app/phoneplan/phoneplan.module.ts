import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneplanRoutingModule } from './phoneplan-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PhoneplanRoutingModule
  ]
})
export class PhoneplanModule { }
