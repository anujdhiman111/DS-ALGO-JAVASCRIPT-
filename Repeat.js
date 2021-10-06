// Find the Duplicate Number

function repeat(array){
    let map = {};
    for(let char of array){
        map[char] = (map[char] || 0) + 1;
    }
    for(let char in map){
        if(map[char] > 1){
            return char;
        }
    }
}
const res = repeat([3,1,3,4,2]);
console.log(res)