import { NgModule } from '@angular/core';

import { FirstComponent } from './first.component';
import { FirstRoutingModule } from './first-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ FirstComponent ],
  imports: [ SharedModule, FirstRoutingModule ],
})
export class FirstModule { }
