import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Plan } from 'src/app/plan/plan';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class UserIndexComponent implements OnInit {
  plans: Plan[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

}
