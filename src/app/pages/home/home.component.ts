import {Component, OnInit} from '@angular/core';
import {classToPlain, plainToClass} from 'class-transformer';
import {User} from '@app/core/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userJson = [
    {
      id: 1,
      firstName: 'Johny',
      lastName: 'Cage',
      age: 27
    }];
  users: User[] = plainToClass(User, this.userJson);

  constructor() {
    console.log('Transform Object To Class', this.users);
    console.log('Transform Class to Object', classToPlain(this.users));
  }

  ngOnInit() {
  }

}
