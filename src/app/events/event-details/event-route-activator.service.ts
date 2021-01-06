import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(@Inject(Router)private router: Router,
  @Inject(EventService) private eventService: EventService) {
  }

  canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params.id);
    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
