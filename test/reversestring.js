// call the function before it is defined using below way.
// But if we define like var name = function(){} then it will not work.
// Source: https://medium.com/front-end-weekly/reverse-string-in-javascript-182d3b05266e 
console.log(showReverse(process.argv[2]));

function showReverse(stringData){
    console.log('Function called.');
    function reverse () {
        return stringData.split('').reverse().join('');
  }
    return reverse();
};


