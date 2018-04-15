var arr = [1,2,5,3,7,6,8,10,4,9];

function bubbleSort(arr) {
    var len = arr.length;
    for(var i=0;i<len;i++){
        for(var j=0;j<len-1-i;j++){
          if(arr[j]>arr[j+1]){//  相邻元素作比较
              var temp = arr[j+1];   //  元素交换
              arr[j+1] = arr[j];
              arr[j] = temp;
          }
        }
    }
    return arr;
}

console.log(arr);   //  排序前  [1,2,5,3,7,6,8,10,4,9]
console.log(bubbleSort(arr))  //  排序后  [1,2,3,4,5,6,7,8,9,10]