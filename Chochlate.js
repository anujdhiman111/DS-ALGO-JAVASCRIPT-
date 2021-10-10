function findMinDiff(arr,m){
    let n = arr.length;
    arr.sort((a,b) =>a-b);
    let min = Number. MAX_VALUE;
    for(let i = 0;i+m-1<n;i++){
        if((arr[i+m-1] - arr[i]) < min){
            min = arr[i+m-1] - arr[i];
        }
    }        
    return min;
}

const res = findMinDiff([3, 4, 1, 9, 56, 7, 9, 12],5);
console.log(res);