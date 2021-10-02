let array = [1,2,3,4,5,6,8];
let index = 3;
let element = 8;

function insertElement(array,index,element) {
    for (let i = array.length; i >= index; i--) {
        array[i] = array[i-1];
    }
    array[index] = element;

    return array;
}
const res = insertElement(array,index,element);
console.log(res)

// Time Complexity: O(n)    (linear)