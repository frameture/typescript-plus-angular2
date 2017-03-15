import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { NgModule } from '@angular/core';

import { CrisesModule } from '../features/crises/crises.module';
import { HeroesModule } from '../features/heroes/heroes.module';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({

  declarations: [
    ComposeMessageComponent,
    NotFoundComponent
  ],
  imports: [
    CrisesModule,
    HeroesModule,
    SharedModule
  ]
})
export class CoreModule { }
