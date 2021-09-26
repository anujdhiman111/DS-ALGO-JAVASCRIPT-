function sum(array){
    array.sort()
    console.log(array)
    let left = 0;
    let right = array.length-1;
    while(left < right){
        let sums = array[left] + array[right];
        if(sums == 0){
            return[array[left],array[right]];
        }
        else if(sums > 0){
            right--;
        }
        else{
            left++;
            right = array.length-1;
        }
    }
}

const result = sum([6,4,7,5,0,-1,-3,-5,-2]);
console.log(result);

// Time complexity: O(n)    (linear)