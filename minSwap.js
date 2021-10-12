

function  minSwap(arr,k){
    let good = 0;
    let n = arr.length; 
    let bad = 0;
    for(let i = 0; i<n;i++){
        if(arr[i]<=k){
            good++;
        }
    }
    for(let i = 0; i<good;i++){
        if(arr[i]>k){
            bad++;
        }
    }
    let i = 0, j=good, ans = bad;
    while(j<n){
        if(arr[i]>k){
            bad--;
        }
        if(arr[j] > k){
            bad++;
        }
        ans = Math.min(ans,bad);
        i++;
        j++;
    }
    return ans
    
 }

 const res = minSwap([2, 1, 5, 6, 3],3);
 console.log(res);