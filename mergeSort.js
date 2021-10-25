// Merge Sort

function merge(arr,low,mid,up){
    let i = low;
    let j = mid+1;
    let k = low;
    let arr1 = [];
    while(i <= mid && j <= up){
        if(arr[i] <= arr[j]){
            arr1[k] = arr[i];
            i++;
            k++;
        }
        else{
            arr1[k] = arr[j];
            j++;
            k++;
        }
    }
    if(i > mid){
        while(j<=up){
            arr1[k] = arr[j];
            j++;
            k++;
        }
    }
    else{
        while(i<=mid){
            arr1[k] = arr[i];
            i++;
            k++;
        }
    }
    for(k = low; k<=up;k++){
        arr[k] = arr1[k];
    }
   
}

function mergeSort(arr,low,up){
    if(low >= up){
        return;
    }
    let mid = Math.floor((up+low)/2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,up);
    merge(arr,low,mid,up);
    return arr
}


let arr = [15,5,24,8,1,3,16,10,20]
let low = 0;
let up = arr.length-1;
const res =  mergeSort(arr,low,up);
console.log(res)