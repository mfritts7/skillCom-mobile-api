import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanCreateComponent } from './create/create.component';
import { PlanIndexComponent } from './index/index.component';


const routes: Routes = [
  { path: 'phoneplan', component: PlanIndexComponent },
  { path: 'phoneplan/create', component: PlanCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
