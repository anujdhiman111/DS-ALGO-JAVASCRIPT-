// Searching in an array where adjacent differ by at most k

function search(arr,k,x){
    let ans = -1;
    let i = 0;
    while(i<arr.length){
        if(arr[i] == x){
            ans = i;
            break;
        }
        i = i + Math.max(1,Math.abs(arr[i] - x)/k)
    }    
    return ans;
}

const res = search([4, 5, 6, 7, 6],1,6);
console.log(res);