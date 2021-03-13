import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { routes } from './components-routing.module';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PhotosComponent } from './photos/photos.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UserDetailsComponent,
    PostCommentsComponent,
    PhotosComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    UserDetailsComponent,
  ],
  providers: [{ 
    provide: LAZYLOAD_IMAGE_HOOKS, 
    useClass: ScrollHooks 
  }]
})
export class ComponentsModule { }
