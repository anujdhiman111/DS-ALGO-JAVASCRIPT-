// Array Subset of another array 

function subset(array1,array2){
  let map = {};
  for(let char of array1){
      map[char] = (map[char] || 0) + 1;
  }

  for(let letter of array2){
      if(!map[letter]){
          return "NO";
      }
  }
  return "YES"
}

const res = subset([11, 1, 13, 21, 3, 7],[11, 3, 7,1]);
console.log(res)
