// Subarray with 0 sum

function subarraySum(array){
    array.sort()
    console.log(array)
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == 0){
            return "Yes";
        }
        sum = sum + array[i];
        if(sum == 0){
            return "Yes"
        }
    }
    return "No";
}
const res = subarraySum([4, 2, -3, 1, 6]);
console.log(res);