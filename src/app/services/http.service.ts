import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Post } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  users: User;

  constructor(private http: HttpClient) { 
    console.log("servicio vinculado")
  }
  
  getUsers() {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users')
  }

  getUserById(id) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getPosts() {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts')
  }

  getPostById(id) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/user/${id}/posts`)
  }


}
