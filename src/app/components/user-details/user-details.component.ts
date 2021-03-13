import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: any
  userId: number = 0

  constructor(private route: ActivatedRoute, private httpService: HttpService) { 
    this.route.params.subscribe(params => {                                                                                       
      this.userId = parseFloat(params.id)
    })
  }

  ngOnInit(): void {
    if(this.userId) {
      this.getUserById()
    } 
  }

  getUserById() {
    this.httpService.getUserById(this.userId).subscribe( res => {
      this.user = res
    })
  }

}
