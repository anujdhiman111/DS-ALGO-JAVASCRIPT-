// Program to Check if a string is a valid shuffle of two distinct strings

function shuffle(str1,str2,str3){
    console.log(str1)
    console.log(str2)
    console.log(str3)
    let len = str1.length;
    let len1 = str2.length;
    let len2 = str3.length;
    if(len + len1 != len2){
        return false;
    }
    else{
        let f = 0,i = 0,j = 0,k = 0;
        while(k<len2){
            if(i<len && str1[i] == str3[k]){
                i++

            }
            else if(j<len1 && str2[j] == str3[k]){
                j++
            }
            else{
                f = 1;
                break;
            }
            k++;
        }
        if(i<len || j<len1){
            return false
        }
        else{
            return true
        }
    }
}

const res = shuffle("xy","12","x12y");
console.log(res);