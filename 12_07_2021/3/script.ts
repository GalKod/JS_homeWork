class Class1{
    arr:number[] = [1, 2, 1, 4, 1, 3];
    constructor(){

    }
    uniqElem(){
        return _.uniq(this.arr);
    }

    print(){
        console.log(JSON.stringify(this.uniqElem()));
    }
}
