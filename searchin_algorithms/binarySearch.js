const input = [];
for(let i =1;i<=5000;i++){
    input.push(i);
}

function binarySearch(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let count = 0;
   

    while(start<=end){
        ++count; 
        let middle = Math.floor( (start+end) / 2 );
        if(arr[middle] === val) return count;

        if(val > arr[middle]) start = middle+1;
        else if(val < arr[middle]) end = middle-1;

    }
    return count;

}

console.log(binarySearch(input,111));


// [2,4,5,11,13,20,27,29]  val = 15
//  [2,4,5,11] val = 1

// time Complexity = O(logn) 