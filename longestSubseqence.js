// Longest consecutive subsequence 

function subsequence(array){
    let count = 1;
    let sum = 0; 
    let maxcount = 0
    array.sort((a,b)=> a-b);
    for(let i = 0; i< array.length; i++){
        sum = array[i];
        if(array[i+1] == sum + 1){
            count++;
            if(maxcount < count){
                maxcount = count;
            }
        }
        else{
            count = 1;
        }
        
    }
return maxcount;
}

const res = subsequence([2,6,1,9,4,5,3]);
console.log(res);