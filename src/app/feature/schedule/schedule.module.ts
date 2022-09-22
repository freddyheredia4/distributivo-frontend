import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ItemCalendarComponent } from './item-calendar/item-calendar.component';
import { ToolbarScheduleComponent } from './toolbar-schedule/toolbar-schedule.component';
//import { ClassroomComboboxComponent } from '../classroom/classroom-combobox/classroom-combobox.component';
import { SharedClassroomModule } from 'src/app/shared/classroom/classroom.shared.module';
import { GradeComboboxComponent } from '../grade/grade-combobox/grade-combobox.component';
import { UploadModalScheduleComponent } from './upload-modal-schedule/upload-modal-schedule.component';
import { TeacherComboboxComponent } from '../teacher/teacher-combobox/teacher-combobox.component';
import { ModalScheduleComponent } from './modal-schedule/modal-schedule.component';

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
    TeacherComboboxComponent,
    ModalScheduleComponent
  ],
  providers: [],
})
export class ScheduleModule {}
