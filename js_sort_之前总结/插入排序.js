var arr = [1, 2, 5, 3,4, 7, 6, 8, 10,  9];

/*
* 插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，
* 但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。
* 当然，如果你说你打扑克牌摸牌的时候从来不按牌的大小整理牌，
* 那估计这辈子你对插入排序的算法都不会产生任何兴趣了
* 1,2,5,3,4,7,6,8,10,9
* 第一次  preIndex = 0 current = 2   1<2 ,没有进到while函数  执行arr[preIndex + 1] = current
* 第二次，i=2,preIndex = 1,current = 5,2<5 ,没有进到while函数  执行arr[preIndex + 1] = current
* 第三次，i=3,preIndex = 2,current = 3, 5>3
* 进入while  5跟3交换位置  preIndex--  =>1  ,arr[preIndex] > current =>  2<3 ....
* */

function insertSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];  //  交换位置
            preIndex--;
        }
        arr[preIndex + 1] = current;  //  如果前一个数没有比后一个数大，则位置不变
    }
    return arr;
}

console.log(arr);  //  排序前

console.log(insertSort(arr));  //  排序后
