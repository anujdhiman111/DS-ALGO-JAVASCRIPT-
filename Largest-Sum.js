// Count Largest Sum Of Consecutive Digits
// num = 4;

function countSum(array,num){
    let max = 0;
    for(let i = 0;i<array.length-num+1;i++){
        let tmp = 0;
        for(let j = i;j<i+num;j++){
            tmp += array[j];
        }
        if(tmp >= max){
            max = tmp
        }
    }
    return max
}

const result = countSum([3,4,1,5,3,8,9,5,3,6],4);
console.log(result);

// Time Complexity:  O(n^2)  