// Count pairs with given sum

function pairs(array,k){
  let sum = 0;
  let count = 0;
  for(let i = 0; i< array.length-1;i++){
       for(let j = i+1; j<array.length;j++){
        sum = array[i] + array[j];
        if(sum == k){
           count++;
       }
       }
  }
  return count;
}

const res = pairs([1, 1, 1, 1],2);
console.log(res);