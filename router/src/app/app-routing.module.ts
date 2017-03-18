import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth-guard.service';
import { ComposeMessageComponent } from './core/compose-message/compose-message.component';
import { NotFoundComponent } from './core/not-found.component';
import { SelectivePreloadingStrategy } from './core/selective-preloading-strategy.service';

const routes: Routes = [
  { // lazily loaded
    path: 'admin',
    loadChildren: 'app/features/admin/admin.module#AdminModule',
    canLoad: [ AuthGuard ]
  },
  { // lazily loaded
    path: 'crisis-center',
    data: { preload: true },
    loadChildren: 'app/features/crises/crises.module#CrisesModule',
  },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
