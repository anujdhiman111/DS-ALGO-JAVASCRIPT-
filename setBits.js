function setBit(n,i){
    // Actual number in binary form
    console.log((n >>> 0).toString(2));
    let mask = 1<<i;
    n = n|mask;
    // After opertaion on number
    console.log((n >>> 0).toString(2));
}

setBit(24,2);