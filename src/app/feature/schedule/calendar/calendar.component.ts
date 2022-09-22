import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import {
  CordenatesEvent,
  Event,
  Hour,
  ScheduleEvents,
} from '../models/scheduleData';
import { ScheduleService } from '../schedule.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [],
})
export class CalendarComponent implements OnInit {
  public events: ScheduleEvents = {
    toFrom : [],
    hours : []
  };
  constructor(
   private scheduleService : ScheduleService,
   private route : ActivatedRoute
  ) {}

  public currentEntity: Event = {
    classroom: '',
    day: '',
    hour: '',
    grade : '',
    subject: '',
    teacher: {
      name: '',
      color: '',
    },
  };

  ngOnInit(): void {
   
    this.route.queryParams.subscribe((params : Params)=>{
      this.getSchedule(params);
    });
  
  }

  getSchedule(params : Params){
    this.scheduleService.getSchedule(this.generateQuerys(params))
    .subscribe(res=>this.events = res)
  }


  giveEvent(day: string, hour: Hour): Event {
   

    const event = hour.events.find((value) =>value.day == day);
     return !event ? this.setNoneEvent(day, hour.position) : event;
  }
  

  private setNoneEvent(day: string, hour: string): Event {
    return {
      classroom: '',
      grade : '',
      day: day,
      hour: hour,
      subject: '',
      teacher: {
        color: 'white',
        name: '',
      },
    };
  }

  handleClickItem(item: CordenatesEvent) {
    
    const index = this.events.hours.findIndex(
      (hour) => hour.position == item.hour
    );

    this.currentEntity =
      this.events.hours[index].events.find(
        (event) => event.day == item.day && event.hour == item.hour
      ) || this.currentEntity;
    if(item.created) document.getElementById('label-modal-view-event-calendar')?.click();
    else {
      this.scheduleService.addQueryParam({
        hour : item.hour,
        day : item.day
      });
      document.getElementById("modal-event-calendar")?.click()
      console.log("lolol.o")
    }
  }

  private generateQuerys(params : Params) {
    const querys = `?room=${params['room'] || ''}&grade=${params['grade'] || ''}&td=${params['td'] || ''}&fd=${params['fd'] || ''}&teacher=${params['teacher'] || ''}`
    return querys
  };

}