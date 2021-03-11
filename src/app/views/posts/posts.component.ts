import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post;
  postsById: number = 0

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {                                                                                       
      this.postsById = parseFloat(params.id)
    })
  }

  ngOnInit(): void {
    if(this.postsById) {
      this.getPostById()
    } else {
      this.httpGet()
    }
  }

  httpGet() {
    this.http.get<Post>('https://jsonplaceholder.typicode.com/posts').subscribe( response => {
      this.posts = response;
    })
  }

  getPostById() {
    this.http.get<Post>(`https://jsonplaceholder.typicode.com/user/${this.postsById}/posts`).subscribe( response => {
      this.posts = response;
      console.log(this.posts)
    })
  }

}
