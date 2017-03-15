import {
  Component,
  animate, group, keyframes, state, style, transition, trigger
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('buttonState', [
      state('active', style({
        backgroundColor: '#000',
        color: '#fff',
        transform: 'scale(1.5)'
      })),
      state('inactive', style({
        backgroundColor: '#fff',
        color: '#000',
        transform: 'scale(1)'
      })),
      transition('* <=> *', animate('300ms ease-out')),
      transition('* <=> *', [
        group([ // groups work on enter/leave
          animate('0.5s 0.1s ease', style({
            color: '#f00',
            transform: 'scale(1.5)'
          })),
          animate('600ms ease-out', style({
            transform: 'translate(50px)'
          }))
        ])
      ])
      //transition('inactive => active', animate('600ms ease-out')),
      // transition('active => inactive', [
      //   animate('500ms ease-in', style({
      //     //backgroundColor: '#f00',
      //     transform: 'rotate(180deg)'
      //   }))
      // ])
    ]),
    trigger('flyInOut', [
      state('in', style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),
    // trigger('flyInOut', [
    //   state('in', style({ transform: 'translateX(0)' })),
    //   transition('void => *', [
    //     animate(300, keyframes([
    //       style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
    //       style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
    //       style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
    //     ]))
    //   ]),
    //   transition('* => void', [
    //     animate(300, keyframes([
    //       style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
    //       style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
    //       style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
    //     ]))
    //   ])
    // ]),
    // trigger('flyInOut', [
    //   state('in', style({ transform: 'translateX(0)' })),
    //   transition(':enter', [
    //     style({ transform: 'translateX(-200%)' }),
    //     animate(500)
    //   ]),
    //   transition('* => void', [ // same as ':leave'
    //     animate(1000), style({ transform: 'translateX(100%)' })
    //   ]),
    // ]),
    trigger('arise', [
      state('in', style({ height: '*' })),
      transition(':leave', [
        animate(300),
        style({ height: 0 })
      ])
    ])
  ]
})
export class AppComponent {
  isActive = 'inactive';
  isActive2 = 'inactive';
  isButtonIn = true;
  isButton2In = true;

  animationStarted(event: any): void {
    console.log('animation started', event);
  }

  flyOut(): void {
    this.isButtonIn = false;
  }

  shrink(): void {
    this.isButton2In = false;
  }

  toggleState(): void {
    this.isActive = this.isActive === 'active' ? 'inactive' : 'active';
  }

  toggleState2(): void {
    this.isActive2 = this.isActive2 === 'active' ? 'inactive' : 'active';
  }
}
