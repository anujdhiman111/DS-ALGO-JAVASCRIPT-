// Check weather the string is palindrome or not

function isPalindrome(S){
   let string = S.split('');
   let n = string.length;
   for(let i = 0; i<Math.floor(n/2); i++){
       if(string[i] !== string[n-1-i]){
           return 0;
       }
   }
   return 1;
}

const res = isPalindrome("aba");
console.log(res);