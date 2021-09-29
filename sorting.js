// Sorting using Recursive Function

let myArray = [2,1,4,3,6,5];
let newList = [];
let i = 0;
let j = 1;

function isSorted(array){
    for(let i = 0; i<array.length;i++){
        if(array[i] > array[i+1]){
            return false;
        }
    }
    return true
}

function sortCheck(array){
    if(isSorted(array)){
        newList = array
        return ;
    }
    else if(array[i] < array[j]){
        i++;
        j++;
        sortCheck(array);
    }
    else{
        [array[i],array[j]] = [array[j],array[i]];
        i = 0;
        j = 1;
        sortCheck(array);
    }
}

sortCheck(myArray);
console.log(newList)
