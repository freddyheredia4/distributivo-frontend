import { Grade } from "./grade";
import { SchoolPeriod } from "./schoolPeriod";
import { Subject } from "./subject";

export interface Teacher{
    id : number , 
	dni : string,
	name : string ,
	lastname: string,
	color : string,
	email : string,
	archived :boolean ,
	grade : Grade[],
	subject : Subject[],
	schoolPeriod : SchoolPeriod[]
}