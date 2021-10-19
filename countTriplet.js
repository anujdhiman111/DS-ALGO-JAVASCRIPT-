// 

function countTriplets(arr,n,sum){
    let count = 0;
    arr.sort((a,b)=>a-b);
    for(let k = 0; k<n-2;k++){
        let i = k+1;
        let j = n-1;
        while(i<j){
            let s = arr[k] + arr[i] + arr[j];
            if(s<sum){
                count+= (j-i);
                i++;
            }
            else{
                j--;
            }
        }
    }
    return count;
}

const res = countTriplets([-2, 0, 1, 3],4,2);
console.log(res);