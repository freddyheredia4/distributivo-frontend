import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-toolbar-location',
  templateUrl: './toolbar-location.component.html',
  styleUrls: []
})
export class ToolbarLocationComponent implements OnInit {

  constructor(
    private locationService : LocationService,

  ) { }

  ngOnInit(): void {
  }

 

}
