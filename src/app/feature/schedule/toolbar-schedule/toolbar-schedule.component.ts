import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import FromToDay from '../util/DateChange'

@Component({
  selector: 'app-toolbar-schedule',
  templateUrl: './toolbar-schedule.component.html',
  styleUrls: []
})
export class ToolbarScheduleComponent implements OnInit {

  constructor(
    private scheduleService : ScheduleService
 
  ) { }

  public dates : FromToDay  =  FromToDay.getCurrentFromToDay();
  public dateForCLient : string = '';



  ngOnInit(): void {
    this.setParamsDay();
    this.dateForCLient = this.dates.getDateForClient()
    
  }
  
  setParamsDay(){
    this.scheduleService.addQueryParam({
     to : this.dates.to,
     from : this.dates.from,
     fd : this.dates.dateFrom.toISOString().split('T')[0],
     td : this.dates.dateTo.toISOString().split('T')[0]
    })
  }


  onChangeClassroom(id : string){
 
  this.scheduleService.addQueryParam({ room : id });

  }

  onChangeGrade(id : string){
    this.scheduleService.addQueryParam({ grade : id });
  }
  
  onChangeTeacher(id : string){
    this.scheduleService.addQueryParam({ teacher : id });
  }
  
  handlerClickNextWeek(){
    console.log(`${this.dates.dateFrom.toLocaleDateString()} - ${this.dates.dateTo.toLocaleDateString()}`)
    this.dates.next()
    this.dateForCLient = this.dates.getDateForClient();
    this.setParamsDay()

  }
  
  handlerClickRedoWeek(){
    this.dates.redo()
    this.dateForCLient = this.dates.getDateForClient();
    this.setParamsDay()
  }

}
