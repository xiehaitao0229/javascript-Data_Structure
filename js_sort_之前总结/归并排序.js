var arr = [1, 2, 5, 3,4, 7, 6, 8, 10,  9];

function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    console.log(left);
    console.log(right);
    return merge(mergeSort(left), mergeSort(right));   //  递归
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    console.log('result:'+result);
    return result;
}



console.log(arr);  //  排序前

console.log(mergeSort(arr));  //  排序后

/*
* 调式结果
* [ 1, 2, 5, 3, 4, 7, 6, 8, 10, 9 ]
[ 1, 2, 5, 3, 4 ]
[ 7, 6, 8, 10, 9 ]
[ 1, 2 ]
[ 5, 3, 4 ]
[ 1 ]
[ 2 ]
result:1,2
[ 5 ]
[ 3, 4 ]
[ 3 ]
[ 4 ]
result:3,4
result:3,4,5
result:1,2,3,4,5
[ 7, 6 ]
[ 8, 10, 9 ]
[ 7 ]
[ 6 ]
result:6,7
[ 8 ]
[ 10, 9 ]
[ 10 ]
[ 9 ]
result:9,10
result:8,9,10
result:6,7,8,9,10
result:1,2,3,4,5,6,7,8,9,10
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

* */
