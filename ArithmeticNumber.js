// Arithmetic Number

function findNo(A,B,C){
    if(C === 0){
        if(A == B){
            return 1;
        }
        else{
            return 0;
        }
    }
    else{
        if((B-A)/C <0){
            return 0
        }
        else{
            if((B-A)%C === 0){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
}

const res = findNo(-2,-9,-7);
console.log(res);