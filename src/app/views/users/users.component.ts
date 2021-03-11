import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.httpGet()
    
  }

  httpGet() {
    this.http.get<User>('https://jsonplaceholder.typicode.com/users').subscribe( response => {
      this.users = response;
    })
  }

}
