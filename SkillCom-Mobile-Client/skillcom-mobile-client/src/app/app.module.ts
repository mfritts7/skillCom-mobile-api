import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { PlanModule } from './plan/plan.module';
import { DeviceModule } from './device/device.module';
import { FrontComponent } from './front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UserModule,
    PlanModule,
    DeviceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
