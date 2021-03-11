import { Routes } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';

export const routes: Routes = [
    { path: 'user-details/:id', component: UserDetailsComponent },
    { path: 'post-comments/:id', component: PostCommentsComponent }
];
