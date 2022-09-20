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
    from : 0,
    to : 0,
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


  giveEvent(day: number, hour: Hour): Event {
    let strDay = day.toString();
   

    const event = hour.events.find((value) =>{ 
      let daySlice = (value?.day) ? value.day.slice(8,10) : '';
      return daySlice == strDay
    
    });
     return !event ? this.setNoneEvent(strDay, hour.position) : event;
  }



  counter(): number[] {
    return Array.from(
      { length: this.events.to - this.events.from },
      (_, i) => i + this.events.from
    );
  }

  private setNoneEvent(day: string, hour: string): Event {
    return {
      classroom: '',
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

    this.events.hours[index].events.push({
      classroom: '',
      day: item.day,
      hour: item.hour,
      subject: '',
      teacher: {
        color: 'gray',
        name: '',
      },
    });

    this.currentEntity =
      this.events.hours[index].events.find(
        (event) => event.day == item.day && event.hour == item.hour
      ) || this.currentEntity;

    document.getElementById('label-modal-view-event-calendar')?.click();
  }

  private generateQuerys(params : Params) {
    const querys = `?room=${params['room'] || ''}&grade=${params['grade'] || ''}&td=${params['td'] || ''}&fd=${params['fd'] || ''}&teacher=${params['teacher'] || ''}`
    return querys
  };

}