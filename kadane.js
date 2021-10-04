// Find the contiguous sub-array(containing at least one number) which has the maximum sum
// and return its sum.

function kadane(array){
    let sum = 0;
    let maxsum = 0;
    for(let i = 0; i < array.length;i++){
        sum = sum + array[i];
    
        if(maxsum < sum){
            maxsum = sum
        }
        if(sum < 0){
            sum = 0;
        }
        if(maxsum <= 0){
            return -1;
        }
    }
    return maxsum;
}

const res = kadane([1,2,3,-6,2,5]);
console.log(res)

// Time Complexity: O(n)    (linear)