function bubbleSort(array){
    for(let i = array.length; i > 0;i--){
        console.log(i);
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
    return array
}

const res = bubbleSort([5,3,4,16,3,8,7]);
console.log(res)