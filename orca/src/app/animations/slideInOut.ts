import { trigger, state, style, transition, animate } from '@angular/core';

export const slideInOut = trigger('slideInOut', [
    state('in', style({ height: '*' })),
    transition('void => *', [
        style({ height: 0 }),
        animate(250, style({ height: '*' }))
    ]),
    transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
    ])
])