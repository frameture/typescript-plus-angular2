import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from '../../core/auth-guard.service';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    canActivate: [ AuthGuardService ],
    component: AdminDashboardComponent,
    children: [
      { path: 'crises', component: ManageCrisesComponent },
      { path: 'heroes', component: ManageHeroesComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }
