import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SecondComponent } from './second.component';

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: SecondComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class SecondRoutingModule { }
