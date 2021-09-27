function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let map = {}
    for(let char of str1){
        map[char] = (map[char] || 0) + 1;
    }

    for(let letter of str2){
        if(!map[letter]){
            return false;
        }
        map[letter]--;
    }
    return true
}
 const result = isAnagram('hello','lleoh');
 console.log(result)

//  Time complexity: O(n)    (linear)