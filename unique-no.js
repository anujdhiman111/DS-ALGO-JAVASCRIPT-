function sum(array){
    if(array.length > 0){
        let i = 0;
        for(let j = 1; j<array.length;j++){
            if(array[i] != array[j]){
                i++;
                array[i] = array[j];
            }
        }
        return i+1;
    }
    else{
        return false;
    }
}

const result = sum([1,1,2,3,4,5,5,5,6,7,7,8,8,9,9]);
console.log(result);

// Time Complexity: O(n)    (linear)