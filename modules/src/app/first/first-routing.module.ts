import { NgModule } from '@angular/core';

import { FirstComponent } from './first.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: FirstComponent }
    ]) ],
  exports: [ RouterModule ]
}) export class FirstRoutingModule { }
