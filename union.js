// Union of the two arrays

function union(array1,array2){
    let set = [...new Set([...array1,...array2])];
    console.log(set)
    return set.length;
}

const res = union([1, 2, 3, 4, 5],[1,2,3,4])
console.log(res)