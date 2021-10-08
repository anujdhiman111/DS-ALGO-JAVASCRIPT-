function product(array){
    let sum = 1;
    let maxsum = 0;
    for(let i = 0; i < array.length;i++){
        sum = sum * array[i];
    
        if(sum != 0 && maxsum < sum){
            maxsum = sum
        }
        if(maxsum <= 0){
            return -1;
        }
    }
    return maxsum;
}

const res = product([2, 3, 4, 5, -1, 0]);
console.log(res)