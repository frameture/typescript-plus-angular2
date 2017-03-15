import { BrowserModule } from '@angular/platform-browser';;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContactModule,
    CoreModule,
    FirstModule,
    SecondModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
