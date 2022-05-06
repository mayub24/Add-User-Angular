import { Injectable } from '@angular/core';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  users: Users[];

  constructor() {

    this.users =
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@gmail.com',
          status: true,
          birthDate: new Date('08/19/1998'),
          hide: true
        },
        {
          firstName: 'Sarah',
          lastName: 'Whinny',
          email: 'sarah@gmail.com',
          status: false,
          birthDate: new Date('01/01/2018'),
          hide: true
        },
        {
          firstName: 'Jerry',
          lastName: 'Man',
          email: 'jerry@gmail.com',
          status: true,
          birthDate: new Date('03/25/1994'),
          hide: true
        }
      ]
  }


  getUsers(): Users[] {
    return this.users;
  }


}

