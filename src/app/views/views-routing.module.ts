
import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {path: "", component: UsersComponent},
    {path: "posts/:id", component: PostsComponent},
    {path: "posts", component: PostsComponent}
];
