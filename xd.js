const ts  = [1,2];
function computeClosestToZero(ts) {
   
    let res = 0;
    
    if(ts.lenght <= 0 && ts.lenght > 10000 ) return res;
     
    ts.forEach((temp)=>{
        res = res == 0 ? temp : res;
        let xd = res > 0 ? res -res -res : res;
        res =  (xd >= (temp < 0 ? temp : temp -temp - temp)) ? res : temp;
    })
  
    
    return res;
}


console.log(computeClosestToZero(ts))
