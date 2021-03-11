import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { routes } from './components-routing.module';
import { PostCommentsComponent } from './post-comments/post-comments.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UserDetailsComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    UserDetailsComponent,
  ]
})
export class ComponentsModule { }
