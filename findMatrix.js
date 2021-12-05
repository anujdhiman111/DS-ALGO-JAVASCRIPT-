// Search a number in 2D Matrix

const matrix = (arr,target) => {
    let length =  arr.length;
    for(let i = 0;i<length;i++){
        for(let j = 0;j<length;j++){
            if(arr[i][j] == target){
                return true
            }
        }
    }
    return false;
}

const result = matrix([[1,2,3],[4,5,6],[7,8,9]],0);
console.log(result);