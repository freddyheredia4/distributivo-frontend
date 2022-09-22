import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SaveEventDTO } from '../models/saveEventDTO';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-modal-schedule',
  templateUrl: './modal-schedule.component.html',
  styleUrls: []
})


export class ModalScheduleComponent implements OnInit {
  
  constructor(
    private routed : ActivatedRoute,
    private scheduleService : ScheduleService
  ) { }
 
  public currentEntity = this.getNullevent();
  

  ngOnInit(): void {
    this.routed.queryParams.subscribe(
      (params)=> {this.setDayAndHour(params)
      } 
    )
  }

  public save(){
    this.scheduleService.save(this.currentEntity).subscribe(
      () => this.scheduleService.reload()
    );
  }

  private setDayAndHour(params : Params){
    console.log(params)
    this.currentEntity.date = params['day'] || '';
    this.currentEntity.hour = params['hour']  || '';
  }

  public setOccupiedBy(id : string){
    this.currentEntity.occupiedBy = id;
  }

  public setClassroom( id : string ){
    this.currentEntity.classroom = id;
  }

  public setPeriod( id : string ){
    this.currentEntity.schoolPeriod = id;
  }

  public getNullevent(): SaveEventDTO {
    return {
      classroom : '',
      date : '',
      hour : '',
      occupiedBy : '',
      schoolPeriod : '4'
    }
  }  
}