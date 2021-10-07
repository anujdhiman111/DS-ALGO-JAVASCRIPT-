// Best Time to Buy and Sell Stock

function stock(array){
    let min = 0;
    let max = 0;
    min = Math.min(...array);
    let idx = array.indexOf(min);
    for(let i = idx;i < array.length;i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    if(max > 0){
        return max-min;
    }
    else{
        return 0;
    }
}

const res = stock([7,1,5,3,8,4]);
console.log(res);