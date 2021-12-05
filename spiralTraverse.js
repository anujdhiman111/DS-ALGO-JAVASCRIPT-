// Spirally traversing a matrix

const traverse = (arr) => {
    let res = [];
    if(arr.length === 0){
        return res;
    }
    let rowStrt = 0;
    let rowEnd  = arr.length-1;
    let colStrt = 0;
    let colEnd = arr[0].length-1;
    while(rowStrt<=rowEnd && colStrt<=colStrt){
        for(let i = colStrt;i<=colEnd;i++){
            res.push(arr[rowStrt][i])
        }
        rowStrt++;
        for(let i=rowStrt;i<=rowEnd;i++){
            res.push(arr[i][colEnd]);
        }
        colEnd--;
        for(let i = colEnd;i>=colStrt;i--){
            res.push(arr[rowEnd][i]);
        }
        rowEnd--;
        for(let i = rowEnd;i>=rowStrt;i--){
            res.push(arr[i][colStrt]);
        }
        colStrt++;
    }
    return res;
}

let result = traverse([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
console.log(result);