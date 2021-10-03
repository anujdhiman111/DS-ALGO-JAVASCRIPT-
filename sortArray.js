//Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

function sortArr(array){
    let arr = [],arr1 = [],arr2 = [];
    for(let i = 0; i<array.length;i++){
        if(array[i] == 0){
            arr.push(array[i]);
        }
        else if(array[i] == 1){
            arr1.push(array[i]);
        }
        else{
            arr2.push(array[i]);
        }
    }
    return arr.concat(arr1,arr2);
}

const res = sortArr([0,2,1,2,0]);
console.log(res);

 