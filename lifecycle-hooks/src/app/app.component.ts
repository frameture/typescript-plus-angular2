import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked,
  DoCheck,
  OnChanges,
  OnInit,
  OnDestroy {

  secondInput = 0;
  showFirst = true;
  title = 'app works!';

  incrementSecond(): void {
    this.secondInput++;
  }

  toggleFirst(): void {
    this.showFirst = !this.showFirst;
  }

  ngAfterViewChecked(): void {
    console.log('root component ngAfterViewChecked \n\n');
  }

  ngOnInit() {
    console.log('root component ngOnInit');
  }

  ngOnDestroy() {
    console.log('root component ngOnDestroy');
  }

  ngDoCheck(): void {
    console.log('root component ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('root component ngOnChanges', changes);
  }

  ngAfterContentInit(): void {
    console.log('root component ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('root component ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('root component ngAfterContentChecked');
  }
}
