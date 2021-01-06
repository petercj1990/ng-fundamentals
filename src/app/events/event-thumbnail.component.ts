import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared';

@Component({
  selector: 'events-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id ]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div class="well" [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
      Time: {{event.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event.price}}</div>

    <div [hidden]="!event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div [hidden]="!event?.onlineUrl">
      Online Url: {{event?.onlineUrl}}
    </div>
    <button class="btn btn-primary"  (click)="handleClickMe()"
    >Click Me!</button>
  </div>
  `,
  styles: [`
    .pad-left:{ margin-left: 10px; },
    .well div { color: #bbb; }
    .green { color: #003300 !important; }
    .bold{ font-weight: bold; }
  `]
})

export class EventThumbnailComponent {
  @Input() event:IEvent;
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    this.eventClick.emit("foo");
  }
  someProperty: any = "some value";

  getStartTimeClass(){
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart}
  }
}
