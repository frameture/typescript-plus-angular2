import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from 'app/core/auth-guard.service';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

const routes: Routes = [
  {
    path: '', // will serve as a lazily loaded parent
    canActivate: [ AuthGuard ],
    component: AdminDashboardComponent,
    children: [
      {
        path: 'crises',
        //  canActivateChild: [ AuthGuardService ], they are loaded eagerly with the parent - so, there is only one authChecking
        component: ManageCrisesComponent
      },
      {
        path: 'heroes',
        //  canActivateChild: [ AuthGuardService ],
        component: ManageHeroesComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }
