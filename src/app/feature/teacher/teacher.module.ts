import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedTeacherModule } from 'src/app/shared/teacher/teacher.shared.module';
import { ModalTeacherComponent } from './modal-teacher/modal-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

import { TeacherComponent } from './teacher.component';
import { ToolbarTeacherComponent } from './toolbar-teacher/toolbar-teacher.component';

const routes : Route[] = [
    {path: ':id', component: TeacherComponent},
    {path: '', component: TeacherComponent}
]

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes), SharedTeacherModule],
    exports: [],
    declarations: [TeacherComponent,
        ModalTeacherComponent,
        TeacherListComponent,
        ToolbarTeacherComponent

    ],
    providers: [],
})
export class TeacherModule { }
