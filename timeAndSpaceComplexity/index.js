function findUniqueNames(array){
    let uniqueNames=[];
    for(let i=0;i<array.length;i++){ //n
        if(!uniqueNames.includes(array[i].toLowerCase())){ //n
            uniqueNames.push(array[i].toLowerCase());
        }
    }
    return uniqueNames; // n
}
// time complexity O(n^2);
// space complexity O(n);
console.log(findUniqueNames(['arafat','shafa','muaz', 'Muaz', 'aRafat', 'sHafa']));