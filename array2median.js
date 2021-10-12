// Median of two sorted arrays of different sizes

function arrayMerge(arr1,arr2){
    let m = arr1.length;
    let n = arr2.length
    let i = m-1;
    let j = 0;
    while(i>=0 && j < n){
        if(arr1[i] >= arr2[j]){
            [arr1[i],arr2[j]] = [arr2[j],arr1[i]];
            i--;
            j++;
        }
        else{
            break;
        }
    }
    arr1.sort((a,b) =>a-b);
    arr2.sort((a,b) =>a-b);
    let arr3 = [...arr1,...arr2];

    let k = arr3.length;
    let med = 0;
    if(k%2 != 0){
        med = arr3[(k/2) - .5];
    }
    else{
        med = Math.floor((arr3[k/2] + arr3[k/2-1])/2);
    }
    return med;
}

const res = arrayMerge([2, 3, 5, 8],[10, 12, 14, 16, 18, 20]);
console.log(res);