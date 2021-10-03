// Find the factorial of a no. by using recursive function.

function fact(num){
    if(num == 1){
        return 1;
    }
    else{
       return num * fact(num-1);
    }
}

const res = fact(5);
console.log(res);
console.log(Number.MIN_SAFE_INTEGER);