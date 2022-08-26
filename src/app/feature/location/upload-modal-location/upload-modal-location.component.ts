import { Component, OnInit } from '@angular/core';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-upload-modal-location',
  templateUrl: './upload-modal-location.component.html',
  styleUrls: []
})
export class UploadModalLocationComponent implements OnInit {

  constructor(private dowloandExcelService : DowloandExcelService,
    private locationService : LocationService,
    private uploadExcelService : DowloandExcelService) { }
  
  public files : File[] = []; 

  ngOnInit(): void {
  }

  importLocations(files : FileList | null ){
    
    if(files?.length === 0) return this.locationService.addDanger('Error', 'Ningun archivo seleccionado')
    this.uploadExcelService.onFileSelected(files!, 'http://localhost:8080/api/location/import-excel')
    ?.subscribe(
      (res)=>{
        this.locationService.addSuccess("Correcto", "Se ha importado correctamente");
      },
      (err)=>{
        console.log('err')
        this.locationService.addDanger('Error', 'Error al hacer la importacion')
      }
    )
    

  }
  
  setFiles(files : File[] | null){
    
    this.files = files ? files : [];

  }

  downloadFile() {
    this.locationService.downloadFile()
      .subscribe(
        (response ) => {
         this.dowloandExcelService.downloadFile(response);
        }
      )
  }



}
