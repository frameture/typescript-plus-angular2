import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.getHeroes();
  }

  get diagnostic() {
    return JSON.stringify(this.heroes);
  }

  addHero(name: string): void {
    name = '{ "id": 1,"name": "RubberMan","age": 50 }'
    this.heroService.addHero(name).subscribe(
      hero => console.log('new Hero', hero),
      this.handleError
    );
  }

  private getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes,
      this.handleError
    );
  }

  private handleError(err: any) {
    console.error('E2ROR', err);
  }
}
