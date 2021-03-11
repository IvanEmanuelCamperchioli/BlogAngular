import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  users: any = []

  constructor(private http: HttpClient) { 
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe( response => {
      this.users = response;
    })
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    return this.users;
  }



}
