import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Hero } from 'app/app-related/hero';
import { HeroService } from '../hero.service';
import { slideInDownAnimations } from 'app/app-related/animations';

@Component({
  animations: [ slideInDownAnimations ],
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) { }

  onBack(): void {
    const id = this.hero ? this.hero.id : undefined;
    this.router.navigate([ '/heroes', { id: id, foo: 'bar' }]);
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params[ 'id' ]))
      .subscribe((hero: Hero) => this.hero = hero);
  }

}
