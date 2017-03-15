import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Hero } from 'app/app-related/hero';
import { HeroService } from '../hero.service';


@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: [ './hero-list.component.css' ]
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;

  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) { }

  isSelected(hero: Hero): boolean {
    return hero.id === this.selectedId;
  }

  onSelect(hero: Hero): void {
    this.router.navigate([ '/hero', hero.id ]);
  }

  ngOnInit() {
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params[ 'id' ];
        return this.heroService.getHeroes();
      });
  }

}
