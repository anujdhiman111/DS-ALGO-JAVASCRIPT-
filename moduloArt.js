// Modulo Arithmetics

// (a power(2))power(b/2) = b is even
// a.a power(b-1) = b is odd
// (a+b)%n = (a%n + b%n)%n
// (a-b)%n = (a%n - b%n)%n  
// (a*b)%n = (a%n * b%n)%n  

function modulo(a,b,n){
    let res = 1;
    while(b > 0){
        if((b&1)!=0){
            res = (res* a%n)%n;
        }
        a = (a%n * a%n)%n;
        b = b >>1;
    }
    return res;
}

const res = modulo(3978432,5,1000000007);
console.log(res);