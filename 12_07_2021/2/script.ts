class Class1{
    arrayNew: number[] = [];
    size: number;
    min: number = -100;
    max: number = 100;
    constructor(size: number){
        this.size=size;
        this.randomNumber();
        
    }

    randomNumber(){
        for (let i:number = 0; i<this.size; i++){
            this.arrayNew[i]=Math.floor(Math.random()*(this.max-this.min+1))+this.min;
        }

    }

    static printArray(arr: number[]){
        console.log(JSON.stringify(arr));
    }

    filterArray(){
        let rezArray: number[];
        rezArray = this.arrayNew.filter(function(i){
            return i>10;
        })
        Class1.printArray(rezArray);
    }
}

function task1(){
    let s:number = parseInt(prompt("Enter array size: ")||"0",10);
    let c: Class1 = new Class1(s);
    Class1.printArray(c.arrayNew);
    c.filterArray();
}

class Class2{
    lorem: string;
    constructor(){
        this.lorem ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen";
    }
    
    sortString(): string {
        let arrStr=this.lorem.split(" ");
        console.log("Сформований масив слів: ",JSON.stringify(arrStr));

        arrStr.sort(function(a,b){
          if(a.length>b.length) return 1;
          if(a.length<b.length) return -1;
            return 0;
        });

    return arrStr.join(" ");
    }

}    

function task2() {
    let c: Class2 = new Class2();
    console.log("Початкові данні: "+c.lorem);
    console.log("Відсортовані дані: ",c.sortString()); 
}