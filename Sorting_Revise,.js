

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


let arr = [12, 11, 13, 5, 6, 7];
// mergeSorting(arr,0,arr.length-1);
// console.log(arr);
// console.log(5/2)


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
function count(){

    
}