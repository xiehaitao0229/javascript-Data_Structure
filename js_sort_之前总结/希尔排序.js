var arr = [1, 2, 5, 3,4, 7, 6, 8, 10,  9];

/*
* 希尔排序是插入排序的一种更高效率的实现。
* 它与插入排序的不同之处在于，它会优先比较距离较远的元素。
* 希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。
* 动态定义间隔序列的算法是《算法（第4版》的合著者Robert Sedgewick提出的。
* 在这里，使用了这种方法。
* */

function shellSort(arr) {
    var len = arr.length,
        temp,gap = 1;
    while(gap<len/3){   //  动态定义间隔序列
        gap = gap*3+1;
    }
    for(gap;gap>0;gap = Math.floor(gap/3)){
        for(var i=gap;i<len;i++){
            temp = arr[i];
            for(var j=i-gap;j>=0&& arr[j]>temp;j-=gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }

    return arr;
}

console.log(arr);  //  排序前

console.log(shellSort(arr));  //  排序后