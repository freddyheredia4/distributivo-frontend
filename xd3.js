const data = [
    13,4,14,0,1,1,16,5,5,13,5,5,3,4,12,7,2,8,15,17,5,10,16,4,17,17,19,19,12,6,2,14,1,7,6,4,8,3,4,14,18,9,18,1,15,9,0,4,18,7,10,2,4,2,11,6,7,9,0,12,17,2,4,5,16,9,13,12,10,4,12,15,11,19,1,1,11,17,18,9,10,3,13,5,14,15,1,6,17,3,11,15,4,0,2,14,19,16,14,18];
function filterDuplicates(data){
   
    if(data.length == 1) return data[0]

   if(!data) throw new Error('data must not be null')
    let res = data.reduce((prev, current)=>{
        if(typeof prev == 'number' ) {
            prev = [prev]
        }

       if(prev.some((value)=> value == current )) return prev;
       prev.push(current)
       return prev;

    })
    
    return res;
}


console.log(filterDuplicates(data))