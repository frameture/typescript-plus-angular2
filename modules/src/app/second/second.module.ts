import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';

import { SecondComponent } from './second.component';
import { SecondRoutingModule } from './second-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ SecondComponent ],
  imports: [ CoreModule, SharedModule, SecondRoutingModule ]
})
export class SecondModule { }
