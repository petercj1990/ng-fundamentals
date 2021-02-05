
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISession } from '../shared';
import { EventService } from '../shared/event.service';



@Component({
  selector: 'session-list',
  templateUrl: './event-detail.component.html',
  styles: [`
  `]
})

export class SessionListComponent {
  @Input() sessions:ISession[];

  constructor() {}

}
