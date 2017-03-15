import {
  Input,
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
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: [ './second.component.css' ]
})
export class SecondComponent implements Input,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked,
  DoCheck,
  OnChanges,
  OnInit,
  OnDestroy {

  @Input() input = 0;

  constructor() { }

  ngAfterViewChecked(): void {
    console.log('second component ngAfterViewChecked  \n\n');
  }

  ngOnInit() {
    console.log('second component ngOnInit');
  }

  ngOnDestroy() {
    console.log('second component ngOnDestroy');
  }

  ngDoCheck(): void {
    console.log('second component ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('second component ngOnChanges', changes);
  }

  ngAfterContentInit(): void {
    console.log('second component ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('second component ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('second component ngAfterContentChecked');
  }

}
