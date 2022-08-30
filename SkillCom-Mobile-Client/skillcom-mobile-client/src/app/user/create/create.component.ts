import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class UserCreateComponent implements OnInit {
  public newUserForm!: FormGroup

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  get f() { return this.newUserForm.controls; }

  // submit() {
  //   this.userService.add(this.newUserForm.value).subscribe(() => {
  //     console.log(this.newUserForm.value);
  //     console.log(this.newUserForm.valid);
  //     console.log("Account created successfully!");
  //     this.router.navigateByUrl('/user');
  //   });
  // }
  
  submit() {
    this.userService.add(this.newUserForm.value)
  }

}
