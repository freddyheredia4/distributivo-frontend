import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ItemCalendarComponent } from './item-calendar/item-calendar.component';
import { ToolbarScheduleComponent } from './toolbar-schedule/toolbar-schedule.component';
//import { ClassroomComboboxComponent } from '../classroom/classroom-combobox/classroom-combobox.component';
import { SharedCareerModule } from 'src/app/shared/career/carer.shared.module';
import { SharedClassroomModule } from 'src/app/shared/classroom/classroom.shared.module';
import { ComboboxClassroomComponent } from 'src/app/shared/classroom/combobox-classroom/combobox-classroom.component';
import { GradeComboboxComponent } from '../grade/grade-combobox/grade-combobox.component';

const routes: Route[] = [
  {
    path: '',
    component: ScheduleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedClassroomModule,
  ],
  exports: [],
  declarations: [
    ScheduleComponent,
    CalendarComponent,
    ItemCalendarComponent,
    ToolbarScheduleComponent,
    GradeComboboxComponent
  ],
  providers: [],
})
export class ScheduleModule {}
