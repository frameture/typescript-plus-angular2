import { NgModule } from '@angular/core';

import { CrisisService } from './crisis.service';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisesRoutingModule } from './crises-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
    CrisisListComponent
  ],
  imports: [
    CrisesRoutingModule,
    SharedModule
  ],
  providers: [ CrisisService ]
})
export class CrisesModule { }
