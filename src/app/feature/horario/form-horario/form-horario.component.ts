import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { HorarioService } from '../horario.service';

@Component({
  selector: 'app-form-horario',
  templateUrl: './form-horario.component.html',
})
export class FormHorarioComponent implements OnInit {

 
  events: any[] = [];

  options: any;

  header: any;

  constructor(
    private horarioService: HorarioService
  ) { }

  ngOnInit() {
      this.horarioService.getEvents().then(events => {
          // this.events = events;
          this.options = {...this.options, ...{events: events}};
      });

      this.options = {
              initialDate :  new Date(),
              headerToolbar: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
              editable: true,
              selectable:true,
              selectMirror: true,
              dayMaxEvents: true
      };
  }

}
