function UnicElem(){
    var arr = [1, 2, 1, 4, 1, 3];
    console.log(JSON.stringify(arr));
    var resArray = _.uniq(arr);
    console.log(JSON.stringify(resArray));
}

