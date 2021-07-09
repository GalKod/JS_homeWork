function randomNumber(number){
    var arrayNew= new Array(number);
    var min=-100;
    var max=100;
    for (var i=0; i<number; i++){
        arrayNew[i]=Math.floor(Math.random()*(max-min+1))+min;
    }
    return arrayNew;
}

function printArray(number){
    var arr=randomNumber(number);
    console.log(JSON.stringify(arr));
    var arrayResult = arr.filter(function (i){
        return i>10; 
    });
    console.log(JSON.stringify(arrayResult));
}

printArray(50);
