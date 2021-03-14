import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any;
  filteredTodos: any
  filterTodo: any;
  selected: any;
  todoById: number = 0;
  check: boolean;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {                                                                                       
      this.todoById = parseFloat(params.id)
    })
  }

  ngOnInit(): void {
    if(this.todoById) {
      this.getTodosById()
    } else {
      this.getAll()
    }
  }

  getAll() {
    this.httpService.getTodos().subscribe( response => {
      this.todos = response
      this.filteredTodos = response
    })
  }

  getTodosById() {
    this.httpService.getTodoById(this.todoById).subscribe( response => {
      this.todos = response
      this.filteredTodos = response
    })
  }
  
  sendId(id: number, completed, todoById) {
    if(id === null || id === undefined && !todoById) {
      alert('debes ingresar un valor')
    } else {
      let idRequest: number;
      todoById ? idRequest = todoById : idRequest = id
      this.httpService.getTodoById(idRequest).subscribe( response => {
        this.todos = response;
        if(completed.value === null){
          null
        } else {
          this.todos = this.todos.filter(todo => { 
            return completed === 'true' 
              ? todo.completed === true 
              : todo.completed === false
          })
        }
      })
    } 
  }

  checked(todo) {
    Swal.fire({
      title: `¿La tarea "${todo.title}" está completa?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Si, actualizar estatus`,
      denyButtonText: `No, aún sigo en ella`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.filteredTodos = this.todos.filter(item => { 
          if(item.userId === todo.userId && item.id === todo.id) {
            item.completed = true
          }
        })
        Swal.fire('Bien!', 'Se ha actualizado un todo', 'success')
      } else if (result.isDenied) {
        this.check = false
        Swal.fire(`El todo "${todo.title}" sigue igual...`, '', 'info')
      }
    })
  }


}
