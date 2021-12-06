// Median in a row-wise sorted Matrix 

const median = (arr) =>{
    let res = [];
    let length = arr.length;
    for(let i = 0;i<length;i++){
        for(let j = 0;j<length;j++){
            res.push(arr[i][j])
        }
    }
    res.sort((a,b)=>a-b);
    let med = 0;
    if(res.length%2 != 0){
        med = res[(res.length/2) - .5];
    }
    else{
        med = Math.floor((res[res.length/2] + res[res.length/2-1])/2);
    }
    return med;
    
}
const result = median([[1,3,5],[2,6,9],[3,6,9]]);
console.log(result)