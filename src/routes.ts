import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';
import {
  EventListComponent,
  CreateEventsComponent,
  EventDetailComponent,
  EventListResolverService,
  EventRouteActivator,
} from './app/events/index';

export const appRoutes:Routes = [
  { path : 'events/new', component: CreateEventsComponent,
  canDeactivate: ['canDeactivateCreateEvent']},
  { path : 'events', component: EventListComponent,
  resolve: {events: EventListResolverService} },
  { path : 'events/:id', component: EventDetailComponent,
  canActivate: [EventRouteActivator] },
  { path : '404', component: Error404Component },
  { path : '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];
