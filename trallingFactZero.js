

function number(n){
    let res = 0;
    for(let i = 5; i <= n; i = i*5){
        res = res + Math.floor(n/i);
    }
    return res;
}

const result = number(30);
console.log(result)