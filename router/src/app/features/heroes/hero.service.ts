import { Injectable } from '@angular/core';

import { Hero } from 'app/app-related/hero';
import { heroes } from 'app/app-related/heroes';

@Injectable()
export class HeroService {
  heroes: Hero[];

  constructor() {
    this.heroes = heroes;
  }

  getHero(id: number): Promise<Hero> {
    return Promise.resolve(this.heroes[ id ]);
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(this.heroes);
  }

}
