import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/posts.model';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post;
  postsById: number = 0
  filterPosts: number;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {                                                                                       
      this.postsById = parseFloat(params.id)
    })

  }

  ngOnInit(): void {
    if(this.postsById) {
      this.getPostById()
    } else {
      this.getAll()
    }
  }

  getAll() {
    this.httpService.getPosts().subscribe( response => {
      this.posts = response;
    })
  }

  getPostById() {
    this.httpService.getPostById(this.postsById).subscribe( response => {
      this.posts = response;
    })
  }
  
  sendId(id: number) {
    console.log(this.postsById)
    if(id === null || id === undefined) {
      alert('debes ingresar un valor')
    } else {
      this.httpService.getPostById(id).subscribe( response => {
        this.posts = response;
      })
    } 
  }

}
