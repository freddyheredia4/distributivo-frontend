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
    id : '',
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
   if(this.events.hours.length > 0) return;

    this.route.queryParams.subscribe((params : Params)=>{
      if(!params['fd'] || !params['td']) return
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
  

  public deleteEvent(){
    this.scheduleService.deleteEvent(this.currentEntity.id).subscribe(
      ()=> {
        this.scheduleService.reload()
        document.getElementById('modal-view-event-calendar')?.click()
      }
    )
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
    }
  }

  private generateQuerys(params : Params) {
    const querys = `?room=${params['room'] || ''}&grade=${params['grade'] || ''}&td=${params['td'] || ''}&fd=${params['fd'] || ''}&teacher=${params['teacher'] || ''}`
    return querys
  };

  private setNoneEvent(day: string, hour: string): Event {
    return {
      id : '',
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
}