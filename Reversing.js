function reverse(array){
    let arr = [];
    for(let i = array.length-1;i >= 0;i--){
        arr.push(array[i]);
    }
    return arr;
}

const res = reverse([1,2,3,4,5,6,7,3]);
console.log(res);

// Time Complexity = O(n)    (linear)