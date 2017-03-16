import { Injectable } from '@angular/core';

import { Crisis } from 'app/app-related/crisis';
import { crises } from 'app/app-related/crises';

@Injectable()
export class CrisisService {
  crises: Crisis[];

  constructor() {
    this.crises = crises;
  }

  getCrisis(id: number): Promise<Crisis> {
    return Promise.resolve(this.crises[ id ]);
  }

  getCrises(): Promise<Crisis[]> {
    return Promise.resolve(this.crises);
  }

  saveCrisis(crisis: Crisis): Promise<void> {
    this.crises[ crisis.id ] = crisis;
    return Promise.resolve();
  }

}
