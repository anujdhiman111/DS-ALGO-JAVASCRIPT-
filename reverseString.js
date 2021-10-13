// Reverse the String

function reverse(s) {
    let n = s.length;
    for(let i = 0; i<n; i++){
        s.splice(i,0,s.pop());
    }
    return s;
};

const res = reverse(["h","e","l","l","o"])
console.log(res);