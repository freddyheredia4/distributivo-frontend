import { Component, OnInit } from '@angular/core';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-upload-modal-classroom',
  templateUrl: './upload-modal-classroom.component.html',
  styleUrls: []
})
export class UploadModalClassroomComponent implements OnInit {

  constructor(private dowloandExcelService : DowloandExcelService,
    private classroomService : ClassroomService,
    private uploadExcelService : DowloandExcelService) { }
  
  public files : File[] = []; 

  ngOnInit(): void {
  }

  importLocations(files : FileList | null ){
    
    if(files?.length === 0) return this.classroomService.addDanger('Error', 'Ningun archivo seleccionado')
    this.uploadExcelService.onFileSelected(files!, 'http://localhost:8080/api/classroom/import-excel')
    ?.subscribe(
      (res)=>{
        this.classroomService.addSuccess("Correcto", "Se ha importado correctamente");
        this.classroomService.getClassrooms('0').subscribe(
          res =>this.classroomService.listClassrooms = res
        )
      },
      (err)=>{
        this.classroomService.addDanger('Error', 'Error al hacer la importacion')
      }
    )
    

  }
  
  setFiles(files : File[] | null){
    
    this.files = files ? files : [];

  }

  downloadFile() {
    this.classroomService.downloadFile()
      .subscribe(
        (response ) => {
         this.dowloandExcelService.downloadFile(response);

        }
      )
  }

}
