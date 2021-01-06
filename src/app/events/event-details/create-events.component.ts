
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../shared/event.service';



@Component({
  selector: 'create-events',
  template: `
  <h1>New Event</h1>
  <hr>
  <div class="col-md-6">
      <h3>[Create Event Form Will Go Here]</h3>
      <br/>
      <br/>
      <button class="btn btn-primary">Save</button>
      <button class="btn btn-Default" (click)="cancel()">Cancel</button>
  </div>
  `,
  styles: [`
  `]
})

export class CreateEventsComponent implements OnInit {
  event: any;
  constructor(@Inject(Router)private router: Router) {}

  cancel() {
    this.router.navigate(['/events'])
  }
  ngOnInit() {
   }
}
