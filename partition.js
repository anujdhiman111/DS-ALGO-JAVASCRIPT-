// Three way partitioning 

function threeWayPartition(array, a, b)
{
    let l = 0; 
    let r = array.length-1;
    for(let i = 0; i<=r; i++){
        if(array[i] < a){
            [array[i],array[l]] = [array[l],array[i]];
            l++;
        }    
        else if(array[i] > b){
             [array[i],array[r]] = [array[r],array[i]];
             r--;
             i--;
        }
    }
    return array;
}

const res = threeWayPartition([1, 2, 3, 3, 4],1,2);
console.log(res);