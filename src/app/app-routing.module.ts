import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },
  { path: 'details', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
