import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoId: number = 0
  photos: any;
  filteredPhotos: any;

  constructor(
    private route: ActivatedRoute, 
    private httpService: HttpService,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe(params => {                                                                                       
      this.photoId = parseFloat(params.id)
    })
  }

  ngOnInit(): void {
    this.getPhotosByPost() 
  }

  getPhotosByPost() {
    this.httpService.getPhotosByPost(this.photoId).subscribe( res => {
      this.photos = res
      this.filteredPhotos = res  
    })
  }

  openDialog(photo: string, title: string, id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '90vh',
      data: {photo, title, id}
    });
    dialogRef.afterClosed().subscribe(remove => {
      if(remove === 'true') {
        Swal.fire({
          title: '¿Estás seguro que quieres eliminar?',
          icon: 'warning',
          buttonsStyling: false,
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si, eliminar esta foto'
        }).then((result) => {
          if (result.isConfirmed) {
            this.photos.splice(this.photos.id === id, 1)
            this.filteredPhotos = this.photos.filter(photo => photo.id !== id)
            Swal.fire(
              'Eliminado!',
              `${title}`,
              'success'
            )
          }
        })
      } 
    });
  }
}

