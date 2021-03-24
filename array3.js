var array = [1,2,3,4,5];

min =[0];

for(var i=0 ; i< array.length ; i++){
    if(array[i] < min){
        min=array[i];
    }
}

console.log(min)