const input = [];
for(let i =1;i<=5000;i++){
    input.push(i);
}

function linearSearch(arr,value){
let len = arr.length;
for(let i = 0 ; i< len;i++){
    if(arr[i]==value) return i+1;
}

return -1;
};

console.log(linearSearch(input, 30000))

// time complexity 
//  big O(n)