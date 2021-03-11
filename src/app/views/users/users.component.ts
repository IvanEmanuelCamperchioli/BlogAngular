import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpGet();
  }

  httpGet() {
    this.httpService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

}
