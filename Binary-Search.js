// Divide and Conquerer Technique
function search(array,num){
    array.sort()
    console.log(array)
    let min =0;
    let max = array.length-1;
    while(min <= max){
        let midIdx = Math.floor((min+max)/2);
        if(array[midIdx] < num){
            min = midIdx+1;
        }
        else if(array[midIdx] > num){
            max = midIdx-1;
        }
        else{
            return midIdx;
        }
    }
    return -1;
}

const result = search([1,2,3,4,5,4,7,3,8,9,6,2],6);
console.log(result)

// Time Complexity: O(log(n))    (binary)