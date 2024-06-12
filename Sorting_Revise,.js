

// merge sorting
function mergeSorting(arr,l,r){
if(l>=r){
return;
}
let mid=l + Math.floor((r-l)/2);
mergeSorting(arr,l,mid);
mergeSorting(arr,mid+1,r);
merge(arr,l,mid,r);


}

function merge(arr,l,mid,r){
    let n1 = mid -l +1;
    let n2 = r - mid;
    let left = new Array(n1);
    let right = new Array(n2);
    for(let i=0;i<n1;i++){
        left[i]=arr[l+i];
    }
    for(let i=0;i<n2;i++){
        right[i]=arr[mid+1+i];
    }
    let i=0,j=0;
    let k=l;
    while(i<n1 && j<n2){
        if(left[i]<=right[j]){
            arr[k++] = left[i++];
        }
        else{
            arr[k++] = right[j++];
        }
        
    }
    while(i<n1){
        arr[k++] = left[i++];
    }
    while(j<n2){
        arr[k++] = right[j++];
    }
}



// mergeSorting(arr,0,arr.length-1);
// console.log(arr);
// console.log(5/2)
let arr = [12, 11, 13, 5, 6, 7];

function quickSorting(arr,l,r){
if(l>=r){
    return;
}
let piInd = partition(arr,l,r);
quickSorting(arr,l,piInd-1);
quickSorting(arr,piInd+1,r);
}
function partition(arr,l,r){
let pivot = arr[l];
let count =0;
for(let i=l+1;i<arr.length;i++){
if(arr[i] < pivot){
count++;
}
}
let piInd = l+count;
swap(arr,l,piInd);
let i=l,j=r;
while(i<piInd && j>piInd){
while(arr[i]<pivot) i++;
while(arr[j]>pivot) j++;
if(i<piInd && j>piInd){
swap(arr,i,j);
i++;
j--;
}


}
return piInd;
}
function swap(arr,l,r){
let temp = arr[l];
arr[l] = arr[r];
arr[r] = temp;

}
quickSorting(arr,0,arr.length -1);
arr



//count sorting
function countSorting(arr){
    let max = arr[0];
for(let i=1;i<arr.length;i++){
if( max<arr[i]){
max = arr[i];
}
}
let freqArray = new Array(max+1).fill(0);
for(let i=0;i<arr.length;i++){
    freqArray[arr[i]]++;
}
let suffixArray = new Array(freqArray.length);
suffixArray[0] = freqArray[0];

for(let i=1;i<suffixArray.length;i++){
suffixArray[i] = suffixArray[i-1] + freqArray[i];
}
freqArray
suffixArray
let sortedArray = new Array(arr.length);
for(let i=arr.length-1;i>=0;i--){
sortedArray[suffixArray[arr[i]]-1] = arr[i];
suffixArray[arr[i]]--;

}
sortedArray
}
// countSorting(arr);
// console.log(arr)

function binarySearch(arr,st,en,tr){
let mid = Math.floor(st + (en-st)/2);
while(st <= en){
if(tr == arr[mid]) return arr[mid];
else if(tr < arr[mid]) {
    en = mid-1;
    mid = Math.floor(st + (en-st)/2);
}
else if(tr>arr[mid]){
    st = mid+1;
    mid = Math.floor(st + (en-st)/2);
}

}

}
console.log(binarySearch(arr,0,arr.length-1,5));