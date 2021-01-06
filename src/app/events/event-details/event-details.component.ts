
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';



@Component({
  selector: 'events-detail',
  templateUrl: './event-detail.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image: { height: 100px; }
  `]
})

export class EventDetailComponent implements OnInit {
  event: any;
  constructor(@Inject(ActivatedRoute)private route: ActivatedRoute, @Inject(EventService)private eventService: EventService) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }
}
