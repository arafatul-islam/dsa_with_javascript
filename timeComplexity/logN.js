// function logarithmN(n){
// let counter = 0;
//     while(Math.floor(n)>1){
//         n/=2;
//         counter++;
//     }
// return counter;
// }
let counter = 0;
function logRecursion(n){
    if(Math.floor(n)<=1){
        return
    }
    
    logRecursion(n/2);
    counter++;


    return counter;
}

const returnedValue = logRecursion(1029);
console.log(returnedValue);