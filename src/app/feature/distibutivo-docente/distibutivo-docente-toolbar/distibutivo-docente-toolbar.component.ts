import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-distibutivo-docente-toolbar',
  templateUrl: './distibutivo-docente-toolbar.component.html'
})
export class DistibutivoDocenteToolbarComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  @Output() termEmiter = new EventEmitter<string>();

  public onInput(dni : string){
    this.termEmiter.emit(dni);
  }
}
