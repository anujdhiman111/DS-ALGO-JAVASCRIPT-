// Minimum number of jumps

function jumps(array){
   let i = 0;
   let count = 0
   while(i <= array.length-1){
      if(i == array.length-1){
         return count;
      }
       let val = array[i];
       if(val == 0){
          return -1;
       }
       i = i + val;
       count++;
   }
   return count;
}


const res = jumps([3, 3, 2, 3, 2, 2, 1, 1]);
console.log(res)