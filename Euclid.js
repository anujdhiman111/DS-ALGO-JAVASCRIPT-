function gcd(a,b){
    if(b ==0){
        return  a;
    }
    return  gcd(b,a%b);
}
const res  = gcd(24,60);
console.log(res);