import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private values = '';

  private onEnter(value: string) :void {
    this.values += value;
  }
}
