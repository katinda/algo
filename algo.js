var tarif =[8,10,12];

max= tarif[0];

for(var i=0;i<tarif.length;i++){
    if(tarif[i]>max){
        max= tarif[i];
    }
}

console.log(max);