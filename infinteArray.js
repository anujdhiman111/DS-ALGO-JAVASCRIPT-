

function searchInfinite(arr,key){
    let low = 0;
    let high = 1;
    while(arr[high] < key){
        low = high;
        high = 2*high;
    }
    return binarySearch(arr,key,low,high);
}

function binarySearch(arr,key,min,max){
    while(min <= max){
        let midIdx = Math.floor((min+max)/2);
        if(arr[midIdx] < key){
            min = midIdx+1;
        }
        else if(arr[midIdx] > key){
            max = midIdx-1;
        }
        else{
            return midIdx;
        }
    }
    return -1;
}

const res = searchInfinite([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,19,20,21,22,23,24,26,27,28],14);
console.log(res)