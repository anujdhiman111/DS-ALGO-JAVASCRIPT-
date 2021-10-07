// Common elements

function common(array1,array2,array3){
    let map1 = {};
    let map2 = {};
    let map3 = {};
    let array = []
    for(let char of array1){
        map1[char] = (map1[char] || 0) + 1
    }
    for(let char of array2){
        map2[char] = (map2[char] || 0) + 1
    }
    for(let char of array3){
        map3[char] = (map3[char] || 0) + 1
    }

    for(let key in map1){
        if(map2[key] && map3[key]){
            array.push(key);
        }
    }
    if(array.length > 0){
        return array;
    } 
    else{
        return -1;
    }
}

const res =  common([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120]);
console.log(res);

// Time Complexity: O(n1 + n2 + n3)