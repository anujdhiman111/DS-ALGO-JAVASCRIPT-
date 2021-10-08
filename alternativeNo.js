// Rearrange array in alternating positive & negative items with O(1) extra space V.Imp

function alternative(array){
    let i = 0;
    let j = array.length-1;
    while(i<j){
        while(i < array.length && array[i] >= 0){
            i++
        }
        while(j >= 0 && array[j] < 0){
            j--;
        }
        if(i < j){
            [array[i],array[j]] = [array[j],array[i]];
        }
        
    }
    
    let k = 0;
    let g = array.length-1;
    while(k < g){
        [array[k],array[g]] = [array[g],array[k]];
        k = k+2;
        g--;
    }
    return array;
}

const res = alternative([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]);
console.log(res);