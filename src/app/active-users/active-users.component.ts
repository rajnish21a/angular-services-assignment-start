import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ChangeStatusService } from '../changeStatus.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private _changeStatusService: ChangeStatusService){}

  ngOnInit(): void {
    this.users = this._changeStatusService.activeUsers;
  }

   onSetToInactive(id: number) {
     this._changeStatusService.onSetToInactive(id);
   }
}
