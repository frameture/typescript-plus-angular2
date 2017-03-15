
import { NgModule } from '@angular/core';

import { AdminModule } from '../features/admin/admin.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CrisesModule } from '../features/crises/crises.module';
import { HeroesModule } from '../features/heroes/heroes.module';
import { LoginModule } from '../features/login/login.module';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({

  declarations: [
    ComposeMessageComponent,
    NotFoundComponent
  ],
  imports: [
    AdminModule,
    CrisesModule,
    HeroesModule,
    LoginModule,
    SharedModule
  ], providers: [
    AuthGuardService,
    AuthService
  ]
})
export class CoreModule { }
