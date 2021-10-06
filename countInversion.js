// Given an array of integers. Find the Inversion Count in the array. 
let count = 0;
function inversion(array){
    for(let i = 0; i<array.length;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[i] > array[j]){
                count++;
            }
        }
    }
    return count;
}

const res = inversion([2, 4, 1, 3, 5]);
console.log(res);