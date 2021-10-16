// Split the binary string into substrings with equal number of 0s and 1s

function binary(str){
    let count = 0,count1 = 0,cnt = 0;
    for(let i = 0; i<str.length;i++){
        if(str[i] == 0){
            count++;
        }
        else{
            count1++;
        }
        if(count == count1){
            cnt++;
        }
    }
    if(cnt == 0){
        return -1
    }
    return cnt;
}

const res = binary("0100110101");
console.log(res);