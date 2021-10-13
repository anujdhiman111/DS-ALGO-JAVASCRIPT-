// Print all the duplicates in the input string

function duplicate(string){
    let map = {}
    let arr = [];
    for(let char of string){
        map[char] = (map[char] || 0) + 1;
    }
    for(let key in map){
        if(map[key] > 1){
            arr.push(`${key} = ${map[key]}`);
        }
    }
    return arr
}

const res = duplicate("test string");
console.log(res);