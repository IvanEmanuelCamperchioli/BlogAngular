import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Post } from '../models/posts.model';
import { Comment } from '../models/comments.model';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
import { environment } from '../../environments/environment';
import { Todo } from '../models/todos.model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {


  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get<User>(`${environment.url}/users`)
  }

  getTodos() {
    return this.http.get<Todo>(`${environment.url}/todos`)
  }

  getAlbums() {
    return this.http.get<Album>(`${environment.url}/albums`)
  }
  
  getPosts() {
    return this.http.get<Post>(`${environment.url}/posts`)
  }

  getUserById(id: number) {
    return this.http.get<User>(`${environment.url}/users/${id}`)
  }
  
  getAlbumById(id: number) {
    return this.http.get<Album>(`${environment.url}/users/${id}/albums`)
  }

  getTodoById(id: number) {
    return this.http.get<Todo>(`${environment.url}/users/${id}/todos`)

  }

  getById(id: number) {
    return this.http.get<Post>(`${environment.url}/user/${id}/posts`)
  }

  getCommentsByPost(id: number) {
    return this.http.get<Comment>(`${environment.url}/posts/${id}/comments`)
  }

  getPhotosByPost(id: number) {
    return this.http.get<Photo>(`${environment.url}/albums/${id}/photos`)
  }


}
