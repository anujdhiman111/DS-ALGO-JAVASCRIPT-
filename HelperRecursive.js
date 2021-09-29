// Helper Recursive Function

function odd(array){
    let result = [];
    function helper(inputArray){
        if(inputArray.length ===0){
            return;
        }
        if(inputArray[0]%2 !==0){
            result.push(inputArray[0])
        }
        helper(inputArray.slice(1));
    }
    helper(array)
    return result;
}
const res = odd([1,2,3,4,5,6,7,8,9,10,11,51,23,44,31]);
console.log(res)