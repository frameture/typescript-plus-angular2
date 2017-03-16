import { DialogService } from 'app/core/dialog.service';
import { CanComponentDeactivate } from 'app/core/can-deactivate-guard.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Crisis } from 'app/app-related/crisis';
import { CrisisService } from '../crisis.service';

@Component({
  templateUrl: './crisis-detail.component.html',
  styleUrls: [ './crisis-detail.component.css' ]
})
export class CrisisDetailComponent implements CanComponentDeactivate, OnInit {

  crisis: Crisis;
  originalCrisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private router: Router,
    private service: CrisisService
  ) { }

  canDeactivate(): boolean | Promise<boolean> {
    if (this.isUnsaved()) {
      return this.dialogService.askUser()
        .then((choice) => choice);
    }
    return true;
  }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        console.log('data:', JSON.stringify(data));
        this.copyCrisis(data[ 0 ]);
      });
  }

  onCancel(): void {
    this.goBack();
  }

  onSave(): void {
    this.originalCrisis = this.crisis;
    this.service.saveCrisis(this.crisis)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate([ '../' ], { relativeTo: this.route });
  }

  private copyCrisis(crisis: Crisis): void {
    this.originalCrisis = crisis;
    this.crisis = new Crisis(crisis.id, crisis.name, crisis.location);
  }

  private isUnsaved(): boolean {
    const a = this.crisis;
    const b = this.originalCrisis;

    return (a.name !== b.name || a.location !== b.location);
  }

}
