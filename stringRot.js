

function rotation(str1,str2){
    let n = str1.length;
    let m = str2.length;
    let string = str1+ str2
    if(n === m && string.indexOf(str2) != -1){
        return true;
    }
    return false;

}

const res = rotation('ABCD','ABCD');
console.log(res);