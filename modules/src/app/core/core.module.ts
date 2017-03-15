import { NgModule, Optional, SkipSelf } from '@angular/core';

import { UserService } from './user.service';

@NgModule({
  providers: [ UserService ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule can be imported ONLY in root module!');
    }
  }
}
