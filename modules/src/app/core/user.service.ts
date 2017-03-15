import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  get user() {
    return 'some authorized user';
  }
}
