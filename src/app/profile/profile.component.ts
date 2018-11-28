import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
