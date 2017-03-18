import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { SelectivePreloadingStrategy } from 'app/core/selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: [ './admin-dashboard.component.css' ]
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private preloadStrategy: SelectivePreloadingStrategy
  ) { }

  get modules() {
    return this.preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    this.sessionId = this.route
      .queryParams
      .map(params => params[ 'session_id' || 'None' ]);

    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');
  }

}
