import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: any
  userId: number = 0

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.route.params.subscribe(params => {                                                                                       
      this.userId = parseFloat(params.id)
    })
  }

  ngOnInit(): void {
    this.getUserById() 
  }

  getUserById() {
    this.http.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`).subscribe( res => {
      this.user = res
    })
  }

}
