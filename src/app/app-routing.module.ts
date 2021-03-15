import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';

const loadViewModule = () => import('./views/views.module').then(v => v.ViewsModule)
const loadComponentModule = () => import('./components/components.module').then(c => c.ComponentsModule)

const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'users', loadChildren: loadViewModule },
  { path: 'details', loadChildren:  loadComponentModule },
  { path: '**', redirectTo: '/', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
