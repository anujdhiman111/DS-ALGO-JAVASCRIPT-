// find the k-th smallest element

function small(array,k){
    for(let i = array.length; i>=0;i--){
        let isSwaped;
        for(let j = 0;j<i-1;j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]];
                isSwaped = true;
            }
        }
        if(!isSwaped){
            break;
        }
    }
    console.log(array);
    return array[k-1];
}

const res = small([7, 10, 4, 3, 20, 15],3);
console.log(res);

// Time Complexity: O(n^2)    (quadratic)