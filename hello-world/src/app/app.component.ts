import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private values = '';

  private onKey(event: any) :void {
    this.values += event.target.value;
  }
}
