function* factorial(n) {
    // your code here
    while (n > 1) {
        var res = n * (n - 1);
        yield n;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}
// 1, 2, 6, 24, 120