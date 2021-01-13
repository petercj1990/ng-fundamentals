
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../shared/event.service';



@Component({
  selector: 'create-events',
  templateUrl: './create-events.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input { background-color:#E05C65; }
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder { background-color:#999; }
    .error :-moz-placeholder { background-color:#999; }
    .error :ms-input-placeholder { background-color:#E05C65; }
  `]
})

export class CreateEventsComponent implements OnInit {
  newEvent;
  isDirty: boolean = true;
  constructor(@Inject(Router)private router: Router) {}

  saveEvent(formValues){
    console.log(formValues);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
  ngOnInit() {
   }
}
