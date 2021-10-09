// Given an array of size n and a number k, find all elements that appear more than n/k times

function times(array,k){
    let min = Math.floor(array.length/k);
    let map = {};
    let arr = [];
    for(let char of array){
        map[char] = (map[char] || 0) + 1;
    }
    for(let key in map){
        if(map[key] > min){
            arr.push(key);
        }
    }
    if(arr.length != 0){
        return arr;
    }
    return -1;
}

const res = times([4, 5, 6, 7, 8, 4, 4],3);
console.log(res);