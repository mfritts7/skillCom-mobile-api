import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './create/create.component';
import { UserIndexComponent } from './index/index.component';
import { ContractEditComponent } from '../contract/edit/edit.component';

const routes: Routes = [
  { path: 'user', component: UserIndexComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'contract/edit/:contractId', component: ContractEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
