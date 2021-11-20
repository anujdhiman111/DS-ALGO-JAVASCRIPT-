let expo = function(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * expo(a, n-1);
  }
};

console.log(expo(4, 2));