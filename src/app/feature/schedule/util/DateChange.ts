const days = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];


class FromToDay  {

    to : number 
    from : number
    dateFrom : Date 
    dateTo : Date

    constructor(data : FromToDayType){
      this.dateFrom = data.dateFrom;
      this.dateTo = data.dateTo;
      this.from = data.from;
      this.to = data.to;
    }
    next () {
        this.dateFrom.setDate(this.dateFrom.getDate() + 7);
        this.dateTo.setDate(this.dateTo.getDate() + 7);
        this.to = this.dateTo.getDate()
        this.from = this.dateFrom.getDate()
        console.log(`${this.dateFrom.toLocaleDateString()} - ${this.dateTo.toLocaleDateString()} `)
    }
    redo ()  {
        this.dateFrom.setDate(this.dateFrom.getDate() - 7);
        this.dateTo.setDate(this.dateTo.getDate() - 7);
        this.to = this.dateTo.getDate();
        this.from = this.dateFrom.getDate()
        console.log(`${this.dateFrom.toLocaleDateString()} - ${this.dateTo.toLocaleDateString()} `)

    }

    static getCurrentFromToDay(){
    
        let options : FromToDayType = createEmptyFromToDay();
        
        let currentDate  = new Date();
    
        changeFromCurrentDate[days[currentDate.getDay()]](currentDate);
        options.dateFrom.setDate(currentDate.getDate());  
        options.dateTo.setDate(currentDate.getDate() + 7);
    
        options.from = options.dateFrom.getDate();
        options.to = options.dateTo.getDate();
        return new FromToDay(options);
            
    }

    getDateForClient(){
        let month = this.dateFrom.toLocaleDateString('ec',{month : 'long'} )
        month = month.charAt(0).toUpperCase() + month.slice(1); 

        return `${month} ${this.dateFrom.getFullYear()}`
    }

}


const changeFromCurrentDate :WhatUp = {
    Domingo : (date :  Date)=>{
        date.setDate(date.getDate()-1)
        return date;
    },
    Lunes : (date : Date)=> {
        date.setDate(date.getDate() +0)
    },
    Martes : (date : Date)=>{
        date.setDate(date.getDate() -1)
    },
    Miercoles : (date : Date)=>{
        date.setDate(date.getDate() -2)
    },
    Jueves : (date :Date)=>{
        date.setDate(date.getDate() -3)
    },

    Viernes : (date : Date)=>{
        date.setDate(date.getDate() -4)
      
    },
    Sabado : (date : Date)=>{
        date.setDate(date.getDate() -5)
    },
}


type FromToDayType ={
    to : number,
    from : number,
    dateFrom : Date,
    dateTo : Date,
}

function createEmptyFromToDay() : FromToDay{
    return  new FromToDay({
        to : 0,
        from : 0,
        dateFrom : new Date(),
        dateTo : new  Date(),

    })
}

type WhatUp = {
    [key : string] : (date : Date)=>void,

}
export default FromToDay;