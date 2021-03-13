import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from  '@angular/material/dialog';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  // swalAlert(id: number) {
  //   Swal.fire({
  //     title: '¿Estás seguro que quieres eliminar?',
  //     icon: 'warning',
  //     buttonsStyling: false,
  //     showCancelButton: true,
  //     cancelButtonText: 'Cancelar',
  //     confirmButtonText: 'Si, eliminar esta foto'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Swal.fire(
  //       //   'Deleted!',
  //       //   'Your file has been deleted.',
  //       //   'success'
  //       // )
  //     }
  //   })
  // }

}
