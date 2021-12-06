// Row with max 1s 

const maxOne = (arr)=>{
    let count = 0,maxCount = 0,index = 0;
    let length = arr.length;
    for(let i = 0;i<length;i++){
        for(let j = 0;j<length;j++){
            if(arr[i][j] == 1){
                count++;
            }
        }
        if(maxCount<count){
            maxCount = count;
            index = i;
        }
        count = 0;
    }
    return index;
} 

const result = maxOne([[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]]);
console.log(result);