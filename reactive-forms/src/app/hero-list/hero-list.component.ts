import { Component, OnInit } from '@angular/core';

import { Hero, heroes } from '../data-model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: [ './hero-list.component.css' ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor() { }

  select(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.heroes = heroes;
  }

}
