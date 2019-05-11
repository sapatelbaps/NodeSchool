// console.log("HELLO WORLD");
// console.log(process.argv);
// usage: node program.js 11 22 33 44 99
Number();

function Number(){
    var sum = 0;

    for (let index = 2; index < process.argv.length; index++) {
        sum += parseInt(process.argv[index]);
    }

    console.log(sum);
    //return sum;
}