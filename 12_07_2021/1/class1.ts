export class NumberDiapazon {
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
