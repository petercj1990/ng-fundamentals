import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EventAppComponent} from './events-app.component';
import {navBarComponent} from './nav/navbar.component';
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
  EventListComponent,
  CreateEventsComponent,
  EventDetailComponent,
  EventListResolverService,
  EventRouteActivator,
  EventService,
  EventThumbnailComponent
} from './events/index';
import { LoginComponent } from './user/login.components';
import { FormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    navBarComponent,
    EventDetailComponent,
    CreateEventsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function checkDirtyState() {
  return false;
}

