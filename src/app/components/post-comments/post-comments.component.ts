import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comments.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  postId: number = 0
  comments: Comment;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.route.params.subscribe(params => {                                                                                       
      this.postId = parseFloat(params.id)
    })
  }

  ngOnInit(): void {
    this.getCommentsByPost() 
  }

  getCommentsByPost() {
    this.httpService.getCommentsByPost(this.postId).subscribe( res => {
      this.comments = res
    })
  }


}
