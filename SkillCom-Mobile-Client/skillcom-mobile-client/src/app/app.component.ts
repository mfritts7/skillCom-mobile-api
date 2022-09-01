import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SkillCom Mobile';
  planId!: number
  addPlan(newPlanId: number) {
    this.planId = newPlanId
  }
}
