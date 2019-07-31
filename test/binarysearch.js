// Sample application for binary search in an array.
// https://www.youtube.com/watch?v=P3YID7liBug
// Binary search means - to find an element
// First the array must be sorted. Now divide the entire array by two and go to middle element. If the middle element you are searching is less than it then repeat the process for until you reach the element or you can say "not found".
// Now same way if the element you are looking for is larger than the middle element then search in the right half of the array. Repeat the process until you find the element or you can say "not found".

var numbers;
var x;

numbers = [1, 3, 4, 5, 13, 20, 25, 40, 42, 44, 53];
x = 13;

var binarySearchFunc = function(numbersArray, n) {
  var l = numbersArray.length + 1;
  console.log("numbersArray[" + l / 2 + "] : " + numbersArray[l / 2]);

  if (numbersArray[l / 2] < n) {
    binarySearchFunc(numbersArray.slice((l / 2)+1, l - 1), n);
  } else if (numbersArray[l / 2] > n) {
    binarySearchFunc(numbersArray.slice(0, (l / 2)-1), n);
  } else if (numbersArray[l / 2] == n) {
    console.log("Found at " + l / 2 + " => numbersArray[" + l / 2 + "] : " + numbersArray[l / 2]);
  } else {
    console.log("Not Found");
  }
};

// binarySearchFunc(numbers, x);

function binarySearch1(numbersArray){
    var length = numbersArray.length;
    var index = 0;
    if(length%2 == 0){
        index = length / 2;
    }else if(length%2 ==1){
        index = (length-1)/ 2;
    }

    if(numbersArray[index] > x){
        binarySearch1(numbersArray.slice(0,index));
    } else if (numbersArray[index] < x){
        binarySearch1(numbersArray.slice(index,length));
    } else if( numbersArray[index] == x){
      console.log('found');      
        return true;
    } else {
      console.log('not found');
        return false;
    }
}

binarySearch1(numbers);