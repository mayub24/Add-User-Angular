import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/Services/user-data.service';
import { Users } from 'src/app/models/user';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers: Users[] = [];
  singleUser: Users =
    {
      firstName: '',
      lastName: '',
      email: '',
      status: true,
    }

  @ViewChild('userForm') form: any;
  @ViewChild('statusCheck') bruh: any;

  enableForm: boolean = true;

  constructor(private dataService: UserDataService) { }

  ngOnInit(): void {
    this.allUsers = this.dataService.getUsers();
  }

  newFunc(singleUser: Users) {
    singleUser.hide = !singleUser.hide;
  }

  // the 
  onSubmit({ value }: NgForm) {
    // this.allUsers.unshift(singleForm);
    console.log(this.form);
    console.log(value);
    this.allUsers.unshift(value);
    console.log(this.bruh.value);
    value.status = this.bruh.value;
    this.form.reset();
  }

}
