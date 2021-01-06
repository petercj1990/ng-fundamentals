import { EventService } from './shared/event.service';
import { Component, Inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';



@Component({
  selector: 'events-list',
  template:
  `
    <div>
    <h1>Upcomiung Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <events-thumbnail #thumbnail [event]="event"></events-thumbnail>
      </div>
    </div>
  <div>
`
})

export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(@Inject(EventService)private eventService: EventService,
  @Inject(ActivatedRoute)private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
