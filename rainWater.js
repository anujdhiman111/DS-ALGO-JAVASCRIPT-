 function trappingWater(arr)
    {
        let n = arr.length;
        let left = [];
        let right = [];
        left[0] = arr[0];
        for(let i = 1; i<n;i++){
            left[i] = Math.max(left[i-1],arr[i]);
        }
        right[n-1] = arr[n-1];
        for(let i = n-2; i >= 0;i--){
            right[i] = Math.max(right[i+1],arr[i]);
        }
        let ans = 0;
        for(let i = 0; i<n; i++){
            ans += Math.min(left[i],right[i]) - arr[i];
        }
        return ans;
    }

    const res = trappingWater([8, 8, 2, 4, 5, 5, 1])
    console.log(res)