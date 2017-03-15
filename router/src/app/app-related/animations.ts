import {
  AnimationEntryMetadata,
  animate, state, style, transition, trigger
} from '@angular/core';

export const slideInDownAnimations: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('.2s ease-in')
    ]),
    transition(':leave', [
      animate('.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);
