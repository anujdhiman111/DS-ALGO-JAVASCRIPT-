// Find the only non-repeating element of the array where all element are repated twice using 
// Bit Manipulation 

function repeat(arr){
    let n = arr.length;
    let res = 0;
    for(let i = 0; i<n;i++){
        res = res ^ arr[i];
    }
    return res;
}

const result = repeat([2,3,2,1,1,6,3,7,6]);
console.log(result);