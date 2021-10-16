// Search in Rotated Sorted Array

function search(array,target){
    let n = array.length;
    let low = 0;
    let high = n-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(array[mid] == target){
        return mid;
        }
        if(array[low] <= array[mid]){
            if(target >= array[low] && target < array[mid]){
                high = mid -1;
            }
           
            else{
                low = mid + 1;
            }
        }
        else{
            if(target > array[mid] && target <= array[high]){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
    }
    return -1;
}

const res = search([8, 10, 12, 15, 2],2);
console.log(res)