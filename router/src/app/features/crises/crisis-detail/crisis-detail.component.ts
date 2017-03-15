import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Crisis } from '../../../app-related/crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: [ './crisis-detail.component.css' ]
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getCrisis(+params[ 'id' ]))
      .subscribe(crisis => this.crisis = crisis);
  }

  onBack(): void {
    this.router.navigate([ '../' ], { relativeTo: this.route });
  }

}
