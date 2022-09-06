import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CordenatesEvent, Event } from '../models/scheduleData';

@Component({
  selector: 'app-item-calendar',
  templateUrl: './item-calendar.component.html',
  styleUrls: []
})
export class ItemCalendarComponent implements OnInit {

  constructor() { }
  @Input() event : Event = {
    classroom : '',
    hour : '',
    day : '',
    subject : '',
    teacher : {
      color : 'red',
      name : ''
    }
  }

  @Output() clickItemEmittier = new EventEmitter<CordenatesEvent>();


  onClickItem(){

    if(this.event.teacher.name.length === 0) return;
 
    this.clickItemEmittier.emit({
      hour : this.event.hour,
      day : this.event.day

    });
  }



  ngOnInit(): void {
  }


}
