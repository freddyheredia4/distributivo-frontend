import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload-modal-user',
  templateUrl: './upload-modal-user.component.html',
  styleUrls: []
})
export class UploadModalUserComponent implements OnInit {

  constructor(private dowloandExcelService : DowloandExcelService,
    private UserService : UserService,
    private uploadExcelService : DowloandExcelService,
    private snackbar : MatSnackBar) { }
  
  public files : File[] = []; 

  ngOnInit(): void {
  }

  importUsers(input : HTMLInputElement ):any{
    
    if(input.files?.length === 0) return  this.snackbar.open( 'Error al hacer la importacion ​​❌')
    this.uploadExcelService.onFileSelected(input.files!, 'http://localhost:8080/api/user/import-excel')
    ?.subscribe(
      ()=>{
        this.snackbar.open("Se ha importado correctamente ​✅​");
        input.value = '';
        this.UserService.getUsers('0').subscribe(
          res=> this.UserService.listUsers = res
        )
      },
      ()=>{
        input.value = '';
        this.snackbar.open( 'Error al hacer la importacion ​​❌')
      }
    )
    

  }
  
  setFiles(files : File[] | null){
    
    this.files = files ? files : [];

  }

  downloadFile() {
    this.UserService.downloadFile()
      .subscribe(
        (response ) => {
         this.dowloandExcelService.downloadFile(response);
        }
      )
  }

}
