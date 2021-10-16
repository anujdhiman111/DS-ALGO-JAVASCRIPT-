// Count Squares

function count(num){
    let count = 0;
    for(let i = 1; i<Math.sqrt(num);i++){
        if(i*i < num){
            count++;
        }
    }
    return count;
}

const res = count(9);
console.log(res);
