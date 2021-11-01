// Swaping operation using Bit Manipulation

function bit(a,b){
    a = a^b;
    b = a^b;
    a = a^b;
    return [a,b];
}

const res = bit(2,4);
console.log(res);