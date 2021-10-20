// K-th element of two sorted Arrays 

function kthElement(A,B,k){ 
    let n = A.length;
    let m = B.length;
    let i = n-1;
    let j = 0;
    let arr = [];
    while(i>=0 && j<m){
        if(A[i] >= B[j]){
            [A[i],B[j]] = [B[j],A[i]];
            i--;
            j++;
        }
        else{
            break;
        }
    }
    A.sort((a,b) => a-b);
    B.sort((a,b) => a-b);
    arr = [...A,...B];
    return arr[k-1]
}

const res = kthElement([2, 3, 6, 7, 9],[1, 4, 8, 10],5)
console.log(res);