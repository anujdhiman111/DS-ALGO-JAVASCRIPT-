function find3Numbers(A,X){
    let n = A.length;
    A.sort((a,b) => a-b);
    let count = 0;
    for(let i = 0; i<n-2;i++){
        let left = i+1;
        let right = n-1;
        while(left < right){
            if(A[i] + A[left] + A[right] == X){
                count = 1;
                break;
            }
            else if(A[i] + A[left] + A[right] < X){
                left++;
            }
            else{
                right--;
            }
        }
        if(count == 1){
            break;
        }
    }
    return count;
}

const res = find3Numbers([1, 4, 45, 6, 10, 8],13);
console.log(res);


