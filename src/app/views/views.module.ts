import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './views-routing.module';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatRippleModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    UsersComponent
  ]
})
export class ViewsModule { }
