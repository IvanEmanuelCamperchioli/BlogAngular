import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album;
  albumsById: number = 0

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {                                                                                       
      this.albumsById = parseFloat(params.id)
    })
  }

  ngOnInit(): void {
    if(this.albumsById) {
      this.getAlbumById()
    } else {
      this.getAll()
    }
  }

  getAll() {
    this.httpService.getAlbums().subscribe( response => {
      this.albums = response;
    })
  }

  getAlbumById() {
    this.httpService.getById(this.albumsById).subscribe( response => {
      this.albums = response;
    })
  }

}
