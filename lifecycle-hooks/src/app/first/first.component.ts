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
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: [ './first.component.css' ]
})
export class FirstComponent implements
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked,
  DoCheck,
  OnChanges,
  OnInit,
  OnDestroy {

  constructor() { }

  ngAfterViewChecked(): void {
    console.log('first component ngAfterViewChecked  \n\n');
  }

  ngOnInit() {
    console.log('first component ngOnInit');
  }

  ngOnDestroy() {
    console.log('first component ngOnDestroy');
  }

  ngDoCheck(): void {
    console.log('first component ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('first component ngOnChanges', changes);
  }

  ngAfterContentInit(): void {
    console.log('first component ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('first component ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('first component ngAfterContentChecked');
  }

}
