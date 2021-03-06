import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ChangeStatusService } from '../changeStatus.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private _changeUserService: ChangeStatusService){}

  ngOnInit(): void {
    this.users = this._changeUserService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this._changeUserService.onSetToActive(id);
  }
}
