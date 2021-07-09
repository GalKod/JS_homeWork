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

var lorem="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen";

function sortString(stroka){
    var arrStr=stroka.split(" ");
    console.log(JSON.stringify(arrStr));

    arrStr.sort(function(a,b){
        if(a.length>b.length) return 1;
        if(a.length<b.length) return -1;
        return 0;
    });

    stroka=arrStr.join(" ");
    console.log(stroka);
}

sortString(lorem);
