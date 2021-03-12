import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoId: number = 0
  photos: Photo;
  modal: boolean = false

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.route.params.subscribe(params => {                                                                                       
      this.photoId = parseFloat(params.id)
    })
    console.log(this.photoId)
  }

  ngOnInit(): void {
    this.getPhotosByPost() 
  }

  getPhotosByPost() {
    this.httpService.getPhotosByPost(this.photoId).subscribe( res => {
      console.log(res)
      this.photos = res
    })
  }

  showModal() {
    this.modal = true
  }

}
