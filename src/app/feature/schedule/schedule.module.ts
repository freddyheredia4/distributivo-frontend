import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ItemCalendarComponent } from './item-calendar/item-calendar.component';
import { ToolbarScheduleComponent } from './toolbar-schedule/toolbar-schedule.component';
//import { ClassroomComboboxComponent } from '../classroom/classroom-combobox/classroom-combobox.component';
import { SharedCareerModule } from 'src/app/shared/career/carer.shared.module';
import { SharedClassroomModule } from 'src/app/shared/classroom/classroom.shared.module';
import { GradeComboboxComponent } from '../grade/grade-combobox/grade-combobox.component';
import { UploadModalScheduleComponent } from './upload-modal-location/upload-modal-location.component';
import { TeacherComboboxComponent } from '../teacher/teacher-combobox/teacher-combobox.component';

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
    GradeComboboxComponent,
    UploadModalScheduleComponent,
    TeacherComboboxComponent
  ],
  providers: [],
})
export class ScheduleModule {}
