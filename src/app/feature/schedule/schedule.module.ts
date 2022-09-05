import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ItemCalendarComponent } from './item-calendar/item-calendar.component';
import { ToolbarScheduleComponent } from './toolbar-schedule/toolbar-schedule.component';

const routes : Route[] =[
    {
      path : '', component : ScheduleComponent
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
    exports: [],
    declarations: [ScheduleComponent, CalendarComponent, ItemCalendarComponent, ToolbarScheduleComponent],
    providers: [],
})
export class ScheduleModule { }
