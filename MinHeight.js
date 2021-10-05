// Minimize the Heights

function minHeight(array,k){
    for(let i = array.length; i > 0;i--){
        let isSwaped;
        for(let j = 0;j<i-1;j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]];
                isSwaped = true;
            }
        }
        if(!isSwaped){
            break;
        }
    }
    console.log(array)
        let diff = 0;
        diff = Math.abs((array[0]+k) - (array[array.length-1]-k))
    return diff;
}

const res = minHeight([1, 5, 8, 10],2);
console.log(res);
