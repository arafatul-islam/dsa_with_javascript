function bubbleSort(arr){
    let len = arr.length;
   for(let i = 0 ; i < len; i=0){
        let isSwap = false;
        for (let j = 0; j < len ; j++) {
            console.log(arr, arr[j], arr[j+1]);
        if(arr[j]> arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwap = true;
        }
        }
        if(!isSwap) break;
        --len;

   }

   return arr;

// for(let i = 0,j=i+1;i<len;){
//     if(arr[i]>arr[j]){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     i=0;
//     --len;
// }
// return arr;
}

console.log(bubbleSort([9,1,2,3,4,5,6,7,8]));