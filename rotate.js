// Cyclically rotate an array by one

function rotate(array){
    let last = array[array.length-1];
    index = array.indexOf(last);
    for(let i = index; i >= 0;i--){
        array[i] = array[i-1]
    }
    array.shift();
    array.unshift(last);  
    return array;
}

const res = rotate([1,2,3,4,5]);
console.log(res)