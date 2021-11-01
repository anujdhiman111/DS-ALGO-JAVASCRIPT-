// Check a number is odd or even using Bit Manipulation

function number(n){
    if(n&1 == 1){
        console.log("No is odd");
    }
    else{
        console.log("No is even");
    }
}
number(106);