const user = [{username:"anuj",email:"abc123@gmail.com"},
            {username:"aarav",email:"aba123@gmail.com"},
            {username:"pari",email:"adpnd123@gmail.com"},];

function isUserExit(array,val){
    for(let item of array){
        if(item['email'] === val){
            return true
        }
    }
    return false;
}

const res = isUserExit(user,"adpnd123@gmail.com");
console.log(res);

// Time Complexity: O(n)    (linear)