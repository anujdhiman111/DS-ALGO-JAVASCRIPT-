// Move all negative numbers to beginning and positive to end with constant extra space

function negative(array){
    let j = 0;
    for(let i = 0; i<array.length;i++){
        if(array[i] < 0){
            if(i != j){
                [array[i],array[j]] = [array[j],array[i]];
            }
            j++;
        }
    }
    return array;
}

const res = negative([-1,-5,9,5,-3,3,6,-9,1]);
console.log(res);