import { Routes } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    { path: 'userDetails/:id', component: UserDetailsComponent }
];