import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo.model';
import { HttpService } from 'src/app/services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoId: number = 0
  photos: Photo;
  photoUrl: string;

  constructor(
    private route: ActivatedRoute, 
    private httpService: HttpService,
    public dialog: MatDialog
  ) {
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

  openDialog(photo: string, title: string) {
    this.photoUrl = photo
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '90vh',
      data: {photo, title}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog resultado es: ${result}`);
    });
  }

  

}

