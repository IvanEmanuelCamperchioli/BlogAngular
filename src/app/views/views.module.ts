import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './views-routing.module';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ComponentsModule } from '../components/components.module';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HttpService } from '../services/http.service';

@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatPaginatorModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    UsersComponent
  ]
})
export class ViewsModule { }
