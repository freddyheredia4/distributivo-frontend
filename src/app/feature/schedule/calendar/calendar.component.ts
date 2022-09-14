import { Component, OnInit } from '@angular/core';
import * as scheduleData from '../../../schedule.json';
import {
  CordenatesEvent,
  Event,
  Hour,
  ScheduleEvents,
} from '../models/scheduleData';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [],
})
export class CalendarComponent implements OnInit {
  public events: ScheduleEvents = scheduleData;
  constructor() {}

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
  }

  giveEvent(day: number, hour: Hour): Event {
    let strDay = day.toString();

    const event = hour.events.find((value) => value.day == strDay);

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
}
