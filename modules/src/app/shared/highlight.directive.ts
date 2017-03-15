import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges, OnInit {

  @Input('appHighlight') color = 'powderblue';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  ngOnChanges(): void {
    console.log('HighlightDirective: color =', this.color);
  }
}
