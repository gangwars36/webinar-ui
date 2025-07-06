import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-webinar-card',
  templateUrl: './webinar-card.component.html',
  styleUrl: './webinar-card.component.scss'
})
export class WebinarCardComponent {
@Input() webinar: any;
}
