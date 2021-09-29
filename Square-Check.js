// Checking the Square

function checkSquare(arr1,arr2){
    let map1 = {};
    let map2 = {};
    for(item of arr1){
        map1[item] = (map1[item] || 0) + 1;
    }
    for(items of arr2){
        map2[items] = (map2[items] || 0) + 1;
    }
    for(let key in map1){
        if(!map2[key*key]){
            return false;
        }
        if(map1[key] !== map2[key*key]){
            return false;
        }
    }
    return true;
}

const result = checkSquare([1,2,4,2],[1,16,4,25]);
console.log(result);

// Time Complexity: O(n)    (linear)