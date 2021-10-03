// Delete the element from the array

function deleteElem(array,idx){
    for(let i = idx; i < array.length-1;i++){
        array[i] = array[i+1];
    }
    array.pop();
    return array
}

const res = deleteElem([1,3,5,3,6,8,4],4);
console.log(res);

// Time Complexity: O(n)    (linear);