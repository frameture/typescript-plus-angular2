import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data[ 'preload' ]) {
      this.preloadedModules.push(route.path);
      console.log('Preloaded Module', route.path);
      return load();
    } else {
      return Observable.of(null);
    }
  }
}
