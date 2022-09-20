import { Component, OnInit } from '@angular/core';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-upload-modal-Schedule',
  templateUrl: './upload-modal-schedule.component.html',
  styleUrls: []
})
export class UploadModalScheduleComponent implements OnInit {

  constructor(private dowloandExcelService : DowloandExcelService,
    private scheduleService : ScheduleService,
    private uploadExcelService : DowloandExcelService) { }
  
  public files : File[] = []; 

  ngOnInit(): void {
  }

  importSchedules(input : HTMLInputElement ){
    
    if(input.files?.length === 0) return this.scheduleService.addDanger('Error', 'Ningun archivo seleccionado')
    this.uploadExcelService.onFileSelected(input.files!, 'http://localhost:8080/api/schedule/import-excel')
    ?.subscribe(
      (res)=>{
        this.scheduleService.addSuccess("Correcto", "Se ha importado correctamente");
        input.value = '';
        this.scheduleService.addQueryParam({});
      },
      (err)=>{
        input.value = '';
        this.scheduleService.addDanger('Error', 'Error al hacer la importacion')
      }
    )
    

  }
  
  setFiles(files : File[] | null){
    
    this.files = files ? files : [];

  }

  downloadFile() {
    this.scheduleService.downloadFile()
      .subscribe(
        (response ) => {
         this.dowloandExcelService.downloadFile(response);
        }
      )
  }

}
