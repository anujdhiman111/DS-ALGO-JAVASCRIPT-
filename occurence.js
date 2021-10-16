// 

function find(arr,n,x){
    let frst = 0;
    let last = 0;
    frst = arr.indexOf(x);
    last = arr.lastIndexOf(x);
     return [frst,last]
}

const res = find([1, 3, 5, 5, 5, 5, 7, 123, 125 ],9,7)
console.log(res)