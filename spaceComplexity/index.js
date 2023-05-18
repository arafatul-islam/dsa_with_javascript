// function singleReturn(array){

//     let total = 0;
//     for(let i=0;i<array.length;i++){
//         total+=array[i];
//     }
//     return total;
// }

// console.log(singleReturn([1,2,3,4])); // return 10 , O(1)

function arrayReturn(array) {
    for(let i=0;i<array.length;i++){
        array[i]*=2;
    }
    return array;
}

console.log(arrayReturn([1,2,3,4])); //[2,4,6,8] O(n)