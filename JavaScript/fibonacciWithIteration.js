function fib(n) {
    if (n < 3) {
        return 1
    }

    var i = 3;
    var a = 1;
    var b = 1;
    var ithFib = a + b;

    while (i < n) {
        i += 1;
        b = a;
        a = ithFib
        ithFib = a + b;
    }
    return ithFib;
}
