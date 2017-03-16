import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  private message: string;

  constructor() {
    this.message =
      'You have unsaved changes. Are you sure you want to leave the page';
  }

  askUser(): Promise<boolean> {
    return Promise.resolve(window.confirm(this.message));
  }

}
