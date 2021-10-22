// 

function inversion(arr){
    let n = arr.length;
    let left  = 0;
    let right = n-1;
    return sort(arr,left,right);
}

function sort(arr,l,r){
    if(l>=r){
        return 0;
    }
    let m = Math.floor((l+r)/2);
    let count = sort(arr,l,m);
    count += sort(arr,m+1,r);
    count += merge(arr,l,m,r);
    return count;
}

function merge(arr,l,m,r){
    let left = [];
    for(let i = l; i < m + 1; i++)
    {
        left.push(arr[i]);  
    }
    let right = [];
    for(let i = m + 1; i < r + 1; i++)
    {
        right.push(arr[i]);
    }
    let i = 0, j = 0, k = l, count = 0;
    while (i < left.length && j < right.length)
    {
        if (left[i] <= right[j])
        {
            arr[k++] = left[i++];
        }
        else
        {
            arr[k++] = right[j++];
            count += (m + 1) - (l + i);
        }
    }
    while (i < left.length)
    {
        arr[k++] = left[i++];
    }
    while (j < right.length)
    {
        arr[k++] = right[j++];
    }
    return count;

}

const res = inversion([2, 4, 1, 3, 5]);
console.log(res);