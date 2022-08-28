import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PhoneRoutingModule
  ]
})
export class PhoneModule { }
