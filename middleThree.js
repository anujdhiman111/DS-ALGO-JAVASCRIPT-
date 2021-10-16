// Middle of Three 

function  middle(A, B, C){
    if((A<B && A>C) || (A<C && A>B)){
        return A;
    }
    else if((B<A && B>C) || (B<C && B>A)){
        return B;
    }
    else{
        return C;
    }
}

const res = middle(978,518,300);
console.log(res)