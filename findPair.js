// Find Pair Given Difference 

function pair(arr,num){
    arr.sort((a,b) =>a-b);
    let n = arr.length;
    let i = 0;
    let j = i+1;
    let diff = 0;
    let count = 0;
    while(i<j){
        diff = Math.abs(arr[i]-arr[j]);
        if(diff == num){
            count++;
            break;
        }
        else if(diff<num){
            j++;
        }
        else{
            i++;
        }
    }
    if(count !== 0){
        return count
    }
    return -1;
}

const res = pair([90, 70, 20, 80, 50],45);
console.log(res)

