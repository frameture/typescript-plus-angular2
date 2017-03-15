import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimations } from 'app/app-related/animations';

@Component({
  animations: [ slideInDownAnimations ],
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: [ './compose-message.component.css' ]
})
export class ComposeMessageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  message = '';

  constructor(private router: Router) { }

  ngOnInit() { }

  onCancel(form: any): void {
    this.closePopup();
    form.reset();
  }

  onSubmit(form: any): void {
    setTimeout(() => {
      console.log(this.message);
      this.closePopup();
      form.reset();
    }, 500);
  }

  private closePopup(): void {
    this.router.navigate([ { outlets: { popup: null } }]);
  }

}
