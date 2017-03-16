import {
  ActivatedRouteSnapshot, RouterStateSnapshot,
  Resolve, Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Crisis } from 'app/app-related/crisis';
import { CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {

  constructor(
    private cs: CrisisService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Crisis> {
    const id = route.params[ 'id' ];

    return this.cs.getCrisis(id).then(crisis => {
      if (crisis) {
        return crisis;
      } else {
        console.log('error resolved - no crisis with id:', id);
        this.router.navigate([ '/crisis-center' ]);
        return null;
      }
    });
  }

}
