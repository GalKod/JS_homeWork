var n = prompt("Enter number:");
while (n!=null && !(n => 25 && n <= 99) )
{
	n = prompt("Enter number in [25,99]");
}

/* if(a === b) { 
rezult = "a and b are equal";
 } else if(a > b) { 
  rezult = "a is greater";
 } else { 
rezult = "b is greater"; 
} */
var a, b;
a=prompt("Enter a: ");
b=prompt("Enter b: ");
var rezult = (a===b)? "a and b are equal": ((a>b)? "a is greater":"b is greater");
alert("result: "+rezult);


function range(a,b)
{
    console.log("odd numbers: ");
    for (var i=a; i<b; i++){
        if (i % 2){
            console.log(i+" ");
        }
    }
  
}

if (a<b) range(a,b)
else console.log("a is greater or equal b");