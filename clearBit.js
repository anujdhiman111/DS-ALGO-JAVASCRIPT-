function clearBit(n,i){
    console.log((n >>> 0).toString(2));
    let mask = ~(1<<i);
    n = n&mask;
    console.log((n >>> 0).toString(2));
}
clearBit(22,4);