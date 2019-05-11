//console.log("HELLO WORLD");
//console.log(process.argv);
Number();

function Number(){
    var sum = 0;

    for (let index = 2; index < process.argv.length; index++) {
        sum += parseInt(process.argv[index]);
    }

    console.log(sum);
    //return sum;
}