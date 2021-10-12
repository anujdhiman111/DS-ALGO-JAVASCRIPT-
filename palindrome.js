// Palindromic Array

function PalinArray(arr){
    let n = arr.length;
    for(let i = 0;i<n;i++){
        let ans = 0;
        let num = arr[i];
        while(num > 0){
            let rem = num%10;
            num = Math.floor(num/10);
            ans = (ans*10) + rem;
        }
        if(ans!==arr[i]){
            return 0;
        }
    }
    return 1;
}

const res = PalinArray([111, 222, 333, 444, 555]);
console.log(res);
