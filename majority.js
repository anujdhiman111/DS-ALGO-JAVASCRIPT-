// Majority Element

function majorityElement(a, size)
{
    if(a.length == 1){
        return a[0];
    }
    let map = {};
    for(let item of a){
        map[item]  = (map[item] || 0) + 1;
    }
    for(let char in map){
        if(map[char] > size/2){
            return char
        }
    }
    return -1;
}

const res = majorityElement([3,1,3,3,2],5)
console.log(res)