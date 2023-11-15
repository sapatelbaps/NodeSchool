/*
A higher-order function is a function that does at least one of the following:

  * Take one or more functions as an input
  * Output a function

All other functions are first order functions. [1]
 */

function repeat(operation, num){
 if(num == 1) return num;
 else{
    num--;
    return repeat(repeat(operation,num), num);
 }
}

module.exports = repeat