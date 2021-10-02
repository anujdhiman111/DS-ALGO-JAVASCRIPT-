function minMax(array){
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i<array.length;i++){
        if(max <= array[i]){
            max = array[i];
        }
    }
    for(let i = 0; i<array.length;i++){
        if(min >= array[i]){
            min = array[i];
        }
    }
    return [max,min]
}

const res  = minMax([1,3,5,4,9,8,5]);
console.log(res);

// Time Complexity: O(n)    (linear)
