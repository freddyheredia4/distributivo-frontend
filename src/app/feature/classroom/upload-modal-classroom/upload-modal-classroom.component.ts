import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-upload-modal-classroom',
  templateUrl: './upload-modal-classroom.component.html',
  styleUrls: []
})
export class UploadModalClassroomComponent {

  constructor(private dowloandExcelService : DowloandExcelService,
    private classroomService : ClassroomService,
    private uploadExcelService : DowloandExcelService,
    private snackbar : MatSnackBar) { }
  
  public files : File[] = []; 



  importLocations(files : FileList | null ):any {
    
    if(files?.length === 0) return this.snackbar.open('Hubo un error al guardar el curso ❌')
    this.uploadExcelService.onFileSelected(files!, 'http://localhost:8080/api/classroom/import-excel')
    ?.subscribe(
      (r)=>{
        this.snackbar.open("Se ha importado correctamente ​✅​");
        this.classroomService.getClassrooms('0').subscribe(
          res =>this.classroomService.listClassrooms = res
        )
      },
      ()=>{
        this.snackbar.open('Hubo un error al guardar el curso ❌')
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
