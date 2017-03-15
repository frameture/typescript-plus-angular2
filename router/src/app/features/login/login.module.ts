import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
