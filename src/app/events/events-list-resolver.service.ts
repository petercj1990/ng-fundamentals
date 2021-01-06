import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolverService implements Resolve<any>{
  constructor(@Inject(EventService) private eventService: EventService) {
  }
  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
