import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Crisis } from 'app/app-related/crisis';
import { CrisisService } from '../crisis.service';


@Component({
  templateUrl: './crisis-list.component.html',
  styleUrls: [ './crisis-list.component.css' ]
})
export class CrisisListComponent implements OnInit {
  crises: Crisis[];
  selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isSelected(crisis: Crisis): boolean {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.getCrises();
  }

  onSelect(crisis: Crisis): void {
    this.selectedId = crisis.id;
    this.router.navigate([ crisis.id ], { relativeTo: this.route });
  }

  private getCrises(): void {
    this.service.getCrises()
      .then(crises => this.crises = crises);
    // error handling
  }

}
