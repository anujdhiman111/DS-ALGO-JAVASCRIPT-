// Merge Without Extra Space

function merge(array1,array2){
    let n = array1.length;
    let m = array2.length;
    let i = n-1;
    let j = 0;
    while(i>=0 && j<m){
        if(array1[i] >= array2[j]){
            [array1[i],array2[j]] = [array2[j],array1[i]];
            i--;
            j++;
        }
        else{
            break;
        }
    }
    array1.sort((a,b) => a-b);
    array2.sort((a,b) => a-b);
    return [...array1,...array2]
}

const res = merge([1, 3, 5, 7],[0, 2, 6, 8, 9])
console.log(res);