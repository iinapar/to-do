import { trigger, animate, transition, style } from '@angular/animations';

// Luodaan fadeIn-animaatio, joka voidaan ottaa elementeissä käyttöön [@fadeInAnimation]-syntaksilla
// Määritellään transitiot erikseen elementin saapumiseen :enter ja poistumiseen :leave näytöltä
export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 0 }))]),
  transition(':leave', [style({ opacity: 1 }), animate('200ms', style({ opacity: 1 }))]),
]);

// Luodaan bounceIn-animaatio [@bounceIn]-triggerillä
// Määritellään transitiot ainostaan elementin ilmestyessä näytölle
export const bounceIn = trigger('bounceIn', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 1 }),
    animate('1s cubic-bezier(0.8, -1, 0.2, 1.8)', style({ transform: 'scale(1)', opacity: 1 })),
  ]),
]);
