import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CareerService } from '../career.service';
import { CareerSave } from '../models/careerSave';

@Component({
  selector: 'app-career-modal',
  templateUrl: './career-modal.component.html'
})
export class CareerModalComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private careerService : CareerService
  ) { }
  
  public currentCareer : CareerSave = this.getClearCareer();

  ngOnInit(): void {
            
    this.route.queryParams.subscribe(
      params => this.getCareer(params)
    )

  }

  private getCareer(params : Params){
    let id : string = params['c'] || '';
    if(id.length == 0) return;
    
    this.careerService.findbyId(id).subscribe(
      res =>  this.currentCareer = res
    
    )

  }

  public setImage(file : FileList | null ){
    
    if(file){ 
      
      this.currentCareer.image = file.item(0);
    }
  }

  public save(file : FileList | null){
    this.setImage(file);
    let form : FormData = this.getFormData();
    if(this.currentCareer.id.toString().length > 0)
    this.careerService.update(form).subscribe(
      () => this.careerService.reload())
    else
    this.careerService.save(form).subscribe((res)=>this.careerService.reload())
  }
  

  private getFormData():FormData{

    let form : FormData= new FormData(); 
    form.append("id", this.currentCareer.id)
    form.append("image", this.currentCareer.image!)
    form.append("name", this.currentCareer.name)
    form.append("duration", this.currentCareer.duration.toString())
    return form;

  }

  public cancel(){
    this.currentCareer = this.getClearCareer()
    
  }
  private getClearCareer(){
    return  {
      duration : 0,
      id : '',
      name : '',
      image : null,
      
    }
  }

}
