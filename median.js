// Find the median

function  find_median(arr){
    arr.sort((a,b)=>a-b);
    let n = arr.length;
    let med = 0;
    if(n%2 != 0){
        med = arr[(n/2) - .5];
    }
    else{
        med = Math.floor((arr[n/2] + arr[n/2-1])/2);
    }
    return med;
}

const res = find_median([17,3,19,3,8,17,1,12,19]);
console.log(res);