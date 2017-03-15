import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    HeroesRoutingModule,
    SharedModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroListComponent,
  ],
  providers: [ HeroService ]
})
export class HeroesModule { }
