import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/scheduleData';

@Component({
  selector: 'app-modal-schedule',
  templateUrl: './modal-schedule.component.html',
  styleUrls: []
})


export class ModalScheduleComponent implements OnInit {
  
  constructor(
    private routed : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routed.params.subscribe(
      (params)=> {
         this.currentEntity.day = params['day'] || '';
         this.currentEntity.hour = params['hour'] || '';
      }
    )

  }
  public currentEntity: Event = {
    classroom: '',
    day: '',
    grade : '',
    hour: '',
    subject: '',
    teacher: {
      name: '',
      color: '',
    },
  }
}
