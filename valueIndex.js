// Value equal to index value 

function valueEqualToIndex(arr,n){
    let array = [];
    for(let i = 0; i<n;i++){
       if(arr[i]== i + 1){
           array.push(arr[i]);
       }
    }
    if(array.length !== 0){
       return array;
    }
    else{
         return -1;
    }
 }

 const res = valueEqualToIndex([15, 2, 45, 12, 7],5);
 console.log(res)