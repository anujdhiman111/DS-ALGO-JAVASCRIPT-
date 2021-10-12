// Smallest subarray with sum greater than x

function smallestSubWithSum(a,x){
    let n = a.length;
    let min = 10000000;
    let i = 0,j = 0;
    let sum = 0;
    while(i<=j && j<n){
        while(sum <=x && j<n){
            sum+= a[j];
            j++;
        }
        while(sum>x && i<j){
            min = Math.min(min,j-i);
            sum -= a[i];
            i++;
        }
    }
    return min;
}

const res = smallestSubWithSum([1, 4, 6, 0, 41,32],51);
console.log(res)