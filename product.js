// Product Array Puzzle

function productExceptSelf(nums,n){
    let l = [];
    let r = [];
    l[0] = 1;
    r[n-1] = 1;
    for(let i = 1;i<n;i++){
         l[i] = l[i-1] *nums[i-1];          
    }
    for(let i = n-2;i>=0;i--){
        r[i] = r[i+1] * nums[i+1];
    }
    for(let i = 0;i<n;i++){
        nums[i] = l[i] * r[i];
    }
    return nums;
 }

 const res = productExceptSelf([10, 3, 5, 6, 2],5)
 console.log(res);