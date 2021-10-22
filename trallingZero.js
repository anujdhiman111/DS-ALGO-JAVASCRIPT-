// 
function check(mid,n){
    let temp = mid,count = 0,f = 5;
    while(f<=temp){
        count += Math.floor(temp/f);
        f = f*5;
    }
    return(count >= n);
}

function  findNum(N){
    if(N == 1){
        return 5;
    }
    let low = 0;
    let high = 5*N;
    while(low<high){
        let mid = Math.floor((low+high)/2);
        if(check(mid,N)){
            high = mid;
        }
        else{
            low = mid+1;
        }
    }
    return low
}

const res = findNum(10);
console.log(res);