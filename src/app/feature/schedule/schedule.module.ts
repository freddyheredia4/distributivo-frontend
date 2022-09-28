import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ItemCalendarComponent } from './item-calendar/item-calendar.component';
import { ToolbarScheduleComponent } from './toolbar-schedule/toolbar-schedule.component';
//import { ClassroomComboboxComponent } from '../classroom/classroom-combobox/classroom-combobox.component';
import { SharedClassroomModule } from 'src/app/shared/classroom/classroom.shared.module';
import { GradeComboboxComponent } from '../../shared/grade/grade-combobox/grade-combobox.component';
import { UploadModalScheduleComponent } from './upload-modal-schedule/upload-modal-schedule.component';
import { ModalScheduleComponent } from './modal-schedule/modal-schedule.component';
import { SharedTeacherModule } from 'src/app/shared/teacher/teacher.shared.module';
import { CardsDistributiveSearchComponent } from '../distributive/cards-distributive-search/cards-distributive-search.component';
import { PickRepeatEventModalComponent } from './pick-repeat-event-modal/pick-repeat-event-modal.component';
import { SharedGradeModule } from 'src/app/shared/grade/grade.shared.module';

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
    SharedTeacherModule,
    SharedGradeModule
  ],
  exports: [],
  declarations: [
    ScheduleComponent,
    CalendarComponent,
    ItemCalendarComponent,
    ToolbarScheduleComponent,
    UploadModalScheduleComponent,
    ModalScheduleComponent,
    CardsDistributiveSearchComponent,
    PickRepeatEventModalComponent
  ],
  providers: [],
})
export class ScheduleModule {}
