import { Component, OnInit } from '@angular/core';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-upload-modal-grade',
  templateUrl: './upload-modal-grade.component.html',
  styleUrls: []
})
export class UploadModalGradeComponent implements OnInit {

  constructor(private dowloandExcelService : DowloandExcelService,
    private gradeService : GradeService,
    private uploadExcelService : DowloandExcelService) { }
  
  public files : File[] = []; 

  ngOnInit(): void {
  }

  importGrades(files : FileList | null ){
    
    if(files?.length === 0) return this.gradeService.addDanger('Error', 'Ningun archivo seleccionado')
    this.uploadExcelService.onFileSelected(files!, 'http://localhost:8080/api/grade/import-excel')
    ?.subscribe(
      (res)=>{
        this.gradeService.addSuccess("Correcto", "Se ha importado correctamente");
        this.gradeService.searchGradesByCareer().subscribe(
          res =>this.gradeService.listGrades = res
        )
      },
      (err)=>{
        this.gradeService.addDanger('Error', 'Error al hacer la importacion')
      }
    )
    

  }
  
  setFiles(files : File[] | null){
    
    this.files = files ? files : [];

  }

  downloadFile() {
    this.gradeService.downloadFile()
      .subscribe(
        (response ) => {
         this.dowloandExcelService.downloadFile(response);

        }
      )
  }


}
