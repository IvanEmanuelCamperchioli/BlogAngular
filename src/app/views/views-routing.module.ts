
import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';

export const routes: Routes = [
    {path: "", component: UsersComponent},
    {path: "posts/:id", component: PostsComponent},
    {path: "posts", component: PostsComponent},
    {path: "albums/:id", component: AlbumsComponent},
    {path: "albums", component: AlbumsComponent}
];
