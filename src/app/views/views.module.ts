import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './views-routing.module';

import {MatExpansionModule} from '@angular/material/expansion';

import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';

@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    UsersComponent
  ]
})
export class ViewsModule { }
