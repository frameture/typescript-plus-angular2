
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { DialogService } from './dialog.service';
import { HeroesModule } from '../features/heroes/heroes.module';
import { LoginModule } from '../features/login/login.module';
import { NotFoundComponent } from './not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({

  declarations: [
    ComposeMessageComponent,
    NotFoundComponent
  ],
  imports: [
    HeroesModule,
    LoginModule,
    SharedModule
  ], providers: [
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    DialogService,
    SelectivePreloadingStrategy
  ]
})
export class CoreModule { }
