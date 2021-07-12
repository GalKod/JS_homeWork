import {expect} from "chai";
import { NumberDiapazon } from "class1";

const numberDiapazon = new NumberDiapazon();
/*class Chislo {
    min: number;
    max: number;
    val: number;
    constructor() {
        this.val = 0;
        this.min = 25; 
        this.max=99;
    }

    setVal(){
        let s: string|null = prompt(`Enter number (${this.min}-${this.max}): `);
        if (s!=null){
            let n: number = parseInt(s);
            if (!(n >= 25 && n <= 99))
            {
                this.setVal()
            } else {
                this.val = n;
                this.getVal();
            }
    
        }
    }

    getVal(){
        console.log(this.val);
    }

}
*/

function task1(){
   
   
   return numberDiapazon.setVal();
}



describe('test', () => {
    it('can be runned', async function () {
        let taskOne = task1();
    });

/*class Class2{
    val1: number = 0;
    val2: number = 0;
    constructor() {
       this.setVal1();
       this.setVal2();
    }
    
    setVal1(){
        this.val1 = parseInt(prompt("Enter a: ")||"0",10);
    }
    
    setVal2(){
        this.val2 = parseInt(prompt("Enter b: ")||"0",10);
    }

       
    equalValue(){
        let rezult: string = (this.val1===this.val2)? "a and b are equal": ((this.val1>this.val2)? "a is greater":"b is greater");
        alert("result: "+rezult);
    }

    oddNumber(){
        console.log("odd numbers: ");
        for (let i:number = this.val1; i<this.val2; i++){
        if (i % 2){
            console.log(i+" ");
        }
    }
    }
}

function task2(){
    let c = new Class2();
    c.equalValue();
}

function task3(){
    let c = new Class2();
    if (c.val1<c.val2) c.oddNumber()
        else alert("a is greater or equal b");
}*/