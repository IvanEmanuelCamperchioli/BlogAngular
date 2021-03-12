import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Post } from '../models/posts.model';
import { Comment } from '../models/comments.model';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

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

  getUserById(id: number) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getAlbums() {
    return this.http.get<Album>('https://jsonplaceholder.typicode.com/albums')
  }

  getAlbumById(id: number) {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
  }

  getPosts() {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts')
  }
  
  getById(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/user/${id}/posts`)
  }

  getCommentsByPost(id: number) {
    return this.http.get<Comment>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }

  getPhotosByPost(id: number) {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }


}
